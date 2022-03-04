package com.portalexame.portalexameback.controller;

import com.portalexame.portalexameback.model.Role;
import com.portalexame.portalexameback.model.User;
import com.portalexame.portalexameback.model.UserRole;
import com.portalexame.portalexameback.service.UserService;
import com.portalexame.portalexameback.service.implem.UserServiceImplem;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.HashSet;
import java.util.Set;

@RestController
@CrossOrigin("*")
@RequestMapping("/user")
public class UserController {

    @Autowired
    private UserServiceImplem userServiceImplem;


    @PostMapping("/")
    public User createUser(@RequestBody User user) throws Exception {
        Set<UserRole> userRoleSet = new HashSet<>();

        Role role = new Role();
        role.setRoleId(90L);
        role.setRoleName("ADMIN");

        UserRole userRole = new UserRole();
        userRole.setRole(role);
        userRole.setUser(user);

        userRoleSet.add(userRole);

        return this.userServiceImplem.createUser(user, userRoleSet);
    }


    //get user por username
    @GetMapping("/{username}")
    public User getUser( @PathVariable("username") String username){ //diferença entre pathvariable e getparam https://cursos.alura.com.br/forum/topico-diferenca-entre-pathvariable-e-requestparam-99402?gclid=CjwKCAiAyPyQBhB6EiwAFUuaklh0EEGTaG4KbaoHpIGZ1XC0ULrfTuYawYzxQd7vQnVof9ihtU4w4xoCMCIQAvD_BwE
        return this.userServiceImplem.getUser(username);
    }


    //delete de user por id
    @DeleteMapping("/{userId}")
    public void deleteUser(@PathVariable("userId") Long userId){
        this.userServiceImplem.deleteUser(userId);
    }

}
