package com.example.yoga.model;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import org.springframework.data.jpa.domain.support.AuditingEntityListener;

import javax.persistence.*;
import javax.validation.constraints.NotNull;

@Entity
@Table(name = "booking")
@EntityListeners(AuditingEntityListener.class)
public class Booking {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name= "id", nullable = false)
    private Long id;

    @NotNull
    @Column(name= "firstname", nullable = false)
    private String firstname;

    @NotNull
    @Column(name= "lastname", nullable = false)
    private String lastname;

    @Column(name= "comment", nullable = false)
    private String comment;

    @NotNull
    @Column(name= "classday", nullable = false)
    private String classday;

    public Long getid() {
        return id;
    }

    public void setid(Long id) {
        this.id = id;
    }

    public String getfirstname() {
        return firstname;
    }

    public void setfirstname(String firstname) {
        this.firstname = firstname;
    }

    public String getlastname() {
        return lastname;
    }

    public void setlastname(String lastname) {
        this.lastname = lastname;
    }

    public String getcomment() {
        return comment;
    }

    public void setcomment(String comment) {
        this.comment = comment;
    }

    public String getclassday() {
        return classday;
    }

    public void setclassday(String classday) {
        this.classday = classday;
    }

}
