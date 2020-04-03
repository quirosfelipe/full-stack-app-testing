const { expect } = require('chai');
const { saveItems } = require('../save-items');
describe("The saveItems function", () => {
  it('adds the new item to the list', () => {
    // Arrange

    const items = [
      { title: 'Title 1', category: 'Category 1' },
      { title: 'Title 2', category: 'Category 2' }
    ];
    const items2 = [
      { title: 'Title 1', category: 'Category 1' },
      { title: 'Title 2', category: 'Category 2' },
      { title: 'Title 3', category: 'Category 3' }
    ];
    const newItem = { title: 'Title 3', category: 'Category 3' };

    // Act
    const result = saveItems(items, newItem);

    // Assert
    expect(result).to.eql(items2);
  });

  it('makes sure the result and the original are different', () => {
    // Arrange
    const items = [
      { title: 'Title 1', category: 'Category 1' },
      { title: 'Title 2', category: 'Category 2' }
    ];

    const newItem = { title: 'Title 3', category: 'Category 3' };

    // Act
    const result = saveItems(items, newItem);

    // Assert
    expect(result).to.not.equal(items);
  });
});
