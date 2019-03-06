package com.example.yoga.controller;

import com.example.yoga.exception.ResourceNotFoundException;
import com.example.yoga.model.Booking;
import com.example.yoga.repository.BookingRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "http://localhost:4200")
public class BookingController {

    @Autowired
    BookingRepository bookingRepository;

    @GetMapping("/booking")
    public List<Booking> getAllBooking() {
        return bookingRepository.findAll();
    }

    @RequestMapping(value = "/booking", method = RequestMethod.POST, consumes = "application/json", produces = "application/json")
    public Booking createBooking(@RequestBody Booking booking) {
        return bookingRepository.save(booking);
    }

    @GetMapping("/booking/{id}")
    public Booking getBookingById(@PathVariable(value = "id") Long bookingId) {
        return bookingRepository.findById(bookingId)
                .orElseThrow(() -> new ResourceNotFoundException("Booking", "id", bookingId));
    }

    @PutMapping("/booking/{id}")
    public Booking updateBooking(@PathVariable(value = "id") Long bookingId,
                                           @Valid @RequestBody Booking bookingDetails) {

        Booking booking = bookingRepository.findById(bookingId)
                .orElseThrow(() -> new ResourceNotFoundException("Booking", "id", bookingId));

        booking.setfirstname(bookingDetails.getfirstname());
        booking.setlastname(bookingDetails.getlastname());
        booking.setcomment(bookingDetails.getcomment());
        booking.setclassday(bookingDetails.getclassday());

        Booking updatedBooking = bookingRepository.save(booking);
        return updatedBooking;
    }

    @DeleteMapping("/booking/{id}")
    public ResponseEntity<?> deleteBooking(@PathVariable(value = "id") Long bookingId) {
        Booking booking = bookingRepository.findById(bookingId)
                .orElseThrow(() -> new ResourceNotFoundException("Booking", "id", bookingId));

        bookingRepository.delete(booking);

        return ResponseEntity.ok().build();
    }
}
