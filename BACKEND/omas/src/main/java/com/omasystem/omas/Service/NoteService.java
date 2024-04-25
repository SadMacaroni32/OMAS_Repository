package com.omasystem.omas.Service;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.omasystem.omas.Dao.NoteDao;
import com.omasystem.omas.Model.NoteModel;

@Service
public class NoteService {
    @Autowired // Annotation for automatic dependency injection
    private NoteDao noteDao; // Declaring a field for NoteDao injection
    
    //GET ALL NOTES
    Map<String, Object> response = new HashMap<String, Object>(); // Creating a HashMap for response data
    public Map<String, Object> getAllNotes() // Method to get all notes
    {
        try {
            List<NoteModel> notes = noteDao.getAllNote(); // Getting all notes from NoteDao
    
            if(notes.size() == 0) // Checking if there are no notes
            {
                response.put("message", "No notes yet."); // Adding a message to the response map
            }
            else
            {
                List<Map<String, Object>> stringList = new ArrayList<>(); // Creating a list to store note details
    
                for (NoteModel note : notes) { // Iterating over each note
                    Map<String, Object> noteMap = new HashMap<>(); // Creating a map to store note details
                    noteMap.put("emp_id", note.getEmp_id()); // Adding employee ID to the note map
                    noteMap.put("username", note.getUsername()); // Adding username to the note map
                    noteMap.put("first_name", note.getFirst_name()); // Adding first name to the note map
                    noteMap.put("middle_name", note.getMiddle_name()); // Adding middle name to the note map
                    noteMap.put("last_name", note.getLast_name()); // Adding last name to the note map
                    noteMap.put("note", note.getNote()); // Adding note content to the note map
                    noteMap.put("noted_at", note.getNoted_at()); // Adding noted at timestamp to the note map
                    noteMap.put("seat_id", String.valueOf(note.getSeat_id())); // Adding seat ID to the note map as a string
                    noteMap.put("del_flag", note.getDel_flag()); // Adding seat ID to the note map as a string
    
                    stringList.add(noteMap); // Adding note map to the list
                }
    
                response.put("message", stringList); // Adding list of note maps to the response map
            }
            
        } catch (Exception e) {
            response.put("message", e.getMessage()); // Adding error message to the response map if an exception occurs
        }
        return response; // Returning the response map
    }
    
}
