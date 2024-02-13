package com.kitri.solo.controller;


import com.kitri.solo.dto.MemberInfo;
import com.kitri.solo.mappers.MovieMapper;
import jakarta.servlet.http.Cookie;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import jakarta.servlet.http.HttpSession;
import org.apache.ibatis.annotations.Param;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@Controller
@RequestMapping("/login")
public class LoginController {
    @Autowired
    MovieMapper movieMapper;

    @GetMapping
    public String loginPage(HttpServletRequest request){
        //초기
        String username = "";
        //쿠키
        Cookie[] cookies = request.getCookies();
        for (Cookie cookie : cookies) {
            if (cookie.getName().equals("rememberme")) {
                username = cookie.getValue();
            }
        }
        request.setAttribute("rememberme", username);

        return "/login/login";
    }

    @PostMapping
    public String login(@RequestParam String email, @RequestParam String password,
                        @RequestParam(required = false) String rememberme, HttpServletRequest req
                        , HttpServletResponse resp) {

        List<MemberInfo> memberInfo = movieMapper.memberInfo();

        if (rememberme == null) {
            rememberme = "";
        }
        if (rememberme.equals("on")) {
            Cookie cookie = new Cookie("rememberme", email);
            resp.addCookie(cookie);
        } else {
            Cookie cookie = new Cookie("rememberme", "");
            cookie.setMaxAge(0);
            resp.addCookie(cookie);
        }

        for (MemberInfo entry : memberInfo) {
            Long memberid = entry.getMemberid();
            String emailChk = entry.getEmail();
            String passwordChk = entry.getPassword();
            String sessionName = entry.getName();
            if (emailChk.equals(email)) {
                if (passwordChk.equals(password)) {
                    HttpSession session = req.getSession();
                    MemberInfo sessionInfo = new MemberInfo(memberid, emailChk, passwordChk, sessionName);
                    session.setAttribute("sessionId", sessionInfo);
                    //성공 메인페이지로
                    return "/main/main";
                }
            }
        }
        //실패페이지
        return "/login/loginFail";
    }

    @GetMapping("logout")
    public String deleteSession(HttpServletRequest req){
        //세션을 무효화한다
        req.getSession().invalidate();
        return "/login/login";
    }
}
