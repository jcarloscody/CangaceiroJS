package com.portalexame.portalexameback.service.implem;

import com.portalexame.portalexameback.model.User;
import com.portalexame.portalexameback.model.UserRole;
import com.portalexame.portalexameback.repository.RoleRepository;
import com.portalexame.portalexameback.repository.UserRepository;
import com.portalexame.portalexameback.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Set;

@Service
public class UserServiceImplem implements UserService {


    @Autowired
    private UserRepository userRepository;

    @Autowired
    private RoleRepository roleRepository;

    @Override
    public User createUser(User user, Set<UserRole> userRole) throws Exception {

        User local = this.userRepository.findByUsername(user.getUsername());

        if (local != null) {
            System.out.println("Alrredy registred!");
            throw  new Exception("Already registred!");
        } else  {
            for (UserRole ur: userRole){
                this.roleRepository.save(ur.getRole()); //GUARDA  O ROLE
            }
            user.getUserRole().addAll(userRole);
            local = this.userRepository.save(user);
        }

        return local;
    }

    @Override
    public User getUser(String username) {
        return this.userRepository.findByUsername(username);
    }

    @Override
    public void deleteUser(Long userId) {
        this.userRepository.deleteById(userId);
    }


}
