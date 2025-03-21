package com.iytebul.service;

import com.iytebul.model.Item;
import com.iytebul.repository.ItemRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ItemService {

    @Autowired
    private ItemRepository itemRepository;

    public List<Item> getAllItems() {
        return itemRepository.findAll();
    }

    public Optional<Item> getItemById(Long id) {
        return itemRepository.findById(id);
    }

    public Item saveItem(Item item) {
        return itemRepository.save(item);
    }

    public void deleteItem(Long id) {
        itemRepository.deleteById(id);
    }

    public List<Item> searchItems(String category, String location) {
        return itemRepository.findAll().stream()
                .filter(item -> (category == null || item.getCategory().equalsIgnoreCase(category)))
                .filter(item -> (location == null || item.getLocation().equalsIgnoreCase(location)))
                .toList();
    }
}
