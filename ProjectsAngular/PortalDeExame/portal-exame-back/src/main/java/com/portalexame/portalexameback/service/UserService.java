package com.portalexame.portalexameback.service;

import com.portalexame.portalexameback.model.User;
import com.portalexame.portalexameback.model.UserRole;
import org.springframework.beans.factory.annotation.Autowired;

import java.util.Set;

public interface UserService {


    public User createUser(User user, Set<UserRole> userRole) throws Exception;

    //busca pelo username
    public User getUser(String username);

    public void deleteUser(Long userId);
}
