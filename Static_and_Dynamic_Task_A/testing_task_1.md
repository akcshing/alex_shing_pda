### Testing task 1:

# Carry out static testing on the code below.
# Comment on any errors that you see below.
```ruby
### Testing task 2 code:

# Carry out dynamic testing on the code below.
# Correct the errors below that you spotted in task 1.

require_relative('card.rb')
class CardGame


  def checkforAce(card) # should be check_for_ace if following convention
    if card.value = 1
      return true
    else
      return false
    end
  end

  dif highest_card(card1 card2)   # def spelled wrong (dif), also needs comma between card1 and card2
  if card1.value > card2.value
    return card.name   # card should be card1, card1 does not have a name attribute         
  else
    card2    # missing return
  end
end
end    # extra end

def self.cards_total(cards)
  total   # total = 0
  for card in cards
    total += card.value
    return "You have a total of" + total  # space after of
  end
end


```
