package de.chris.twisabackend.repositories;

import org.springframework.data.repository.CrudRepository;

import de.chris.twisabackend.models.User;

public interface UserRepository extends CrudRepository<User, Integer> {

}
