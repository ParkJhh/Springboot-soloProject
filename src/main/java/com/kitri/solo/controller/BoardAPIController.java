package com.kitri.solo.controller;

import com.kitri.solo.dto.RequestDtoBoard;
import com.kitri.solo.mappers.MovieMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;

@RestController
@RequestMapping("/api/boards")
public class BoardAPIController {

    @Autowired
    MovieMapper movieMapper;

    @GetMapping("")
    public ArrayList<RequestDtoBoard> todos() {
        ArrayList<RequestDtoBoard>  x = (ArrayList<RequestDtoBoard>) movieMapper.boardInfo();
        return x;
    }
}
