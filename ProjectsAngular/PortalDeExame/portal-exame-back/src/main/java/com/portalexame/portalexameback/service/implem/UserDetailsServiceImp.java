package com.portalexame.portalexameback.service.implem;

import com.portalexame.portalexameback.model.User;
import com.portalexame.portalexameback.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

@Service
public class UserDetailsServiceImp implements UserDetailsService {

    @Autowired
    private UserRepository userRepository;

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        User use = this.userRepository.findByUsername(username);

        if (use == null){
            System.out.println("No user foudn");
            throw new UsernameNotFoundException("No user found!");
        }
        return use;
    }
}
