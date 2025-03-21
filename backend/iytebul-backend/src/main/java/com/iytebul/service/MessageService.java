package com.iytebul.service;

import com.iytebul.model.Message;
import com.iytebul.repository.MessageRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class MessageService {

    @Autowired
    private MessageRepository messageRepository;

    public List<Message> getMessagesForUser(Long userId) {
        return messageRepository.findByReceiverId(userId);
    }

    public Message sendMessage(Message message) {
        return messageRepository.save(message);
    }
}
