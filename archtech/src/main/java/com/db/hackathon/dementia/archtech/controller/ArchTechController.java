package com.db.hackathon.dementia.archtech.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import com.db.hackathon.dementia.archtech.login.entity.ArchTechLogin;
import com.db.hackathon.dementia.archtech.login.service.ArchTechLoginService;

@RestController
@CrossOrigin
public class ArchTechController {
	
	@Autowired
	private ArchTechLoginService archTechLoginService;
	
	@GetMapping("/archtechlogin/all")
	public List<ArchTechLogin> getAllArchTechLogin()
	{
		return archTechLoginService.getAllArchTechLogin();
	}

	
	  @GetMapping("/archtechlogin/{userid}") public
	  ResponseEntity<List<ArchTechLogin>> getUserById(@PathVariable("userid")
	  String userid) {
	  
	  
	  Optional<List<ArchTechLogin>> archTechLoginOptional =
	  Optional.of(archTechLoginService.getArchTechLoginById(userid));
	
	  if (archTechLoginOptional.isPresent()) { return
	  ResponseEntity.ok(archTechLoginOptional.get()); } else { return
	  ResponseEntity.notFound().build(); }
	  
	  
	  }
	 

}
