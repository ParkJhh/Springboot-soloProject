package com.kitri.solo.mappers;


import com.kitri.solo.dto.MemberInfo;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;

@Mapper
public interface MovieMapper {

    //전체 멤버 이메일 조회
    List<MemberInfo> memberInfo();

    void memberSave(MemberInfo memberInfo);
}
