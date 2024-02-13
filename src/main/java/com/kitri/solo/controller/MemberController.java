package com.kitri.solo.controller;


import jakarta.servlet.http.HttpServletResponse;
import jakarta.servlet.http.HttpSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.ui.Model;
import com.kitri.solo.dto.MemberInfo;
import com.kitri.solo.mappers.MovieMapper;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.validation.Valid;
import org.springframework.stereotype.Controller;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

import java.util.List;

@Controller
@RequestMapping("/member")
public class MemberController {
    @Autowired
    MovieMapper movieMapper;

    @GetMapping
    public String memberAdd(){
        return "/member/memberadd";
    }

    @PostMapping("/chk")
    public String readForm(@Valid MemberInfo form, BindingResult bindingResult, Model model){

        //에러발생
        if(bindingResult.hasErrors()){
            model.addAttribute("memberError", "etc");
            return "/member/memberError";
        }
        //패스워드 불일치
        if(!form.getPassword().equals(form.getPasswordChk())){
            model.addAttribute("memberError", "pwerror");
            return "/member/memberError";
        }
        List<MemberInfo> members = movieMapper.memberInfo();
        //이메일 중복 체크
        for(MemberInfo entry : members){
            String email = entry.getEmail();
            if(email.equals(form.getEmail())){
                model.addAttribute("memberError", "emailerror");
                return "/member/memberError";
            }
        }
        //모든 체크를 통과하면 저장
        movieMapper.memberSave(form);
        //성공시 연결될 페이지
        return "/member/memberOk";
    }
    //마이페이지
    @GetMapping("/mypage")
    public String mypage(){
        return "/member/mypage";
    }
    //회원정보 수정 페이지
    @GetMapping("/memberupdate")
    public String update(){
        return "/member/update";
    }
    @PostMapping("/nowUpdate")
    public String nowUpdate(@Valid MemberInfo form, BindingResult bindingResult, Model model){
        //에러발생
        if(bindingResult.hasErrors()){
            model.addAttribute("memberError", "etc");
            return "/member/updateError";
        }
        //패스워드 불일치
        if(!form.getPassword().equals(form.getPasswordChk())){
            model.addAttribute("memberError", "pwerror");
            return "/member/updateError";
        }
        //문제 없는 경우 업데이트
        movieMapper.memberUpdate(form);
        model.addAttribute("memberError", "OK");
        return "/member/mypage";
    }
    //회원탈퇴 페이지
    @GetMapping("/memberout")
    public String memberout(){
        return "/member/memberout";
    }
    @PostMapping("/outconfirm")
    public String outconfirm(@RequestParam String email ,@RequestParam String emailChk, Model model,
                             HttpServletRequest req){
        MemberInfo sessionInfo = (MemberInfo) req.getSession().getAttribute("sessionId");
        //이메일 불일치
        if(!email.equals(emailChk)){
            model.addAttribute("memberError", "outerror");
            return "/member/memberoutFail";
        }
        //로그인한 내 이메일과 입력한 이메일이 다른 경우
        if(!sessionInfo.getEmail().equals(email) || !sessionInfo.getEmail().equals(emailChk)){
            model.addAttribute("memberError", "outchkerror");
            return "/member/memberoutFail";
        }
        //이메일 일치시 세션 무효화, DB삭제, 메인페이지로 이동
        movieMapper.memberDelete(sessionInfo.getMemberid());
        req.getSession().invalidate();
        return "/main/main";
    }
}
