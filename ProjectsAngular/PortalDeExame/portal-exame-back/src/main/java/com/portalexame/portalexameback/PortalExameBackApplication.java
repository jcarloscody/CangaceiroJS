package com.portalexame.portalexameback;

import com.portalexame.portalexameback.model.Role;
import com.portalexame.portalexameback.model.User;
import com.portalexame.portalexameback.model.UserRole;
import com.portalexame.portalexameback.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

import java.util.HashSet;
import java.util.Set;

@SpringBootApplication
public class PortalExameBackApplication implements CommandLineRunner {

	@Autowired
	private UserService userService;

	@Autowired
	private BCryptPasswordEncoder bCryptPasswordEncoder;

	public static void main(String[] args) {
		SpringApplication.run(PortalExameBackApplication.class, args);
	}

	@Override
	public void run(String... args) throws Exception {
		System.out.println("Iniciando codigo");

		User user = new User();
		user.setFirstName("josue");
		user.setLastName("Carlos");
		user.setUsername("josue");
		user.setPassword(this.bCryptPasswordEncoder.encode("josue"));
		user.setEmail("josue@gmail.com");
		user.setProfile("default.png");

		Role role = new Role();
		role.setRoleId(44L);
		role.setRoleName("ADMIN");

		Set<UserRole> userRoleSet = new HashSet<>();

		UserRole  userRole = new UserRole();
		userRole.setRole(role);
		userRole.setUser(user);

		userRoleSet.add(userRole);

		User user1 = this.userService.createUser(user, userRoleSet);
		System.out.println(user1.getFirstName());

	}
}
