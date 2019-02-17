require('minitest/rg')
require('minitest/autorun')
require_relative('./testing_task_2')
require_relative('./card.rb')

class CardTest < MiniTest::Test

  def setup
    card_1 = Card.new("Spades",1)
    card_2 = Card.new("Diamonds", 8)
    card_3 = Card.new("Clubs", 3)
    card_4 = Card.new("Hearts", 10)

    card_array = [card_1, card_2, card_3, card_4]
    card_array_2 = [card_2, card_3]
  end

  def test_checkforAce
    assert_equal(true, card_1.checkforAce())
    assert_equal(false, card_2.checkforAce())
  end

  def test_highest_card
    assert_equal(card_2, highestcard(card_1, card_2))
    assert_equal(card_4, highest_card(card_4, card_2))
  end

  def test_cards_total
    assert_equal("You have a total of 22", Card.cards_total(card_array))
    assert_equal("You have a total of 11", Card.cards_total(card_array_2))
  end

end
