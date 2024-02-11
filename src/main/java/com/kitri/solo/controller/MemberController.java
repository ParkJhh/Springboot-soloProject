package com.kitri.solo.controller;


import com.kitri.solo.dto.MemberInfo;
import com.kitri.solo.mappers.MovieMapper;
import jakarta.validation.Valid;
import org.springframework.stereotype.Controller;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;

import java.util.List;

@Controller
@RequestMapping("/memberadd")
public class MemberController {

    MovieMapper movieMapper;

    @GetMapping
    public String memberAdd(){
        return "/member/memberadd";
    }

    @PostMapping
    public String readForm(@Valid MemberInfo form, BindingResult bindingResult){
        //에러발생
        if(bindingResult.hasErrors()){
            return "/member/memberAdd";
        }
        //패스워드 불일치
        if(!form.getPassword().equals(form.getPasswordChk())){
            return "/member/memberPwFail";
        }
        List<MemberInfo> members = movieMapper.memberInfo();
        //이메일 중복 체크
        for(MemberInfo entry : members){
            String email = entry.getEmail();
            if(email.equals(form.getEmail())){
                return "/member/memberEmailFail";
            }
        }
        //모든 체크를 통과하면 저장
        movieMapper.memberSave(form);
        //성공시 연결될 페이지
        return "/member/memberOk";
    }
}
