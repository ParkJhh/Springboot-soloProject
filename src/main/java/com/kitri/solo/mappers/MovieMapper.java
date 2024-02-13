package com.kitri.solo.mappers;


import com.kitri.solo.dto.MemberInfo;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;

@Mapper
public interface MovieMapper {

    //전체 멤버 이메일 조회
    List<MemberInfo> memberInfo();
    //회원정보 저장
    void memberSave(MemberInfo memberInfo);
    //회원정보 수정
    void memberUpdate(MemberInfo memberInfo);
    //회원 탈퇴
    void memberDelete(Long memberid);
}
