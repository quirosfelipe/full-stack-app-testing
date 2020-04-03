const { expect } = require('chai');
const { mergeCategories } = require('../merge-categories');

describe("mergeCategories()", () => {
  context("Using <li> tags", () => {
    const template = `
      <div>
        <ul>
          <!-- Content here -->
        </ul>
      </div>
    `;

    it("should return no <li>s for no categories", () => {
      //Arrange
      const categories = [];
      //Act
      const result = mergeCategories(template, categories, "li");
      //Assertion
      expect(result).to.contain("<div>");
      expect(result).to.contain("</div>");
      expect(result).to.contain("<ul>");
      expect(result).to.contain("</ul>");
      expect(result).to.not.contain("<li>");
      expect(result).to.not.contain("</li>");
      expect(result).to.not.contain("<!-- Content here -->");
    });

    it("should return a single <li> for one category", () => {
      //Arrange
      const categories = ['Bootcamp'];
      //Act
      const result = mergeCategories(template, categories, "li");
      //Assert
      expect(result).to.include("<div>");
      expect(result).to.include("</div>");
      expect(result).to.include("<ul>");
      expect(result).to.include("</ul>");
      expect(result).to.include("<li>Bootcamp</li>");
      expect(result).to.not.include("<!-- Content here -->");
    });

    it("should return an <li> for each category", () => {
      //Arrange
      const categories = ["Bootcamp1", "Bootcamp2", "Bootcamp3"];
      //Act
      const result = mergeCategories(template, categories, "li");
      //Assert
      expect(result).to.include("<div>");
      expect(result).to.include("</div>");
      expect(result).to.include("<ul>");
      expect(result).to.include("</ul>");
      expect(result).to.include("<li>Bootcamp1</li>");
      expect(result).to.include("<li>Bootcamp2</li>");
      expect(result).to.include("<li>Bootcamp3</li>");
      expect(result).to.not.include("<!-- Content here -->");
    });
  });

  context("using <option> tags", () => {
    const template = `
      <div>
        <select>
          <!-- Content here -->
        </select>
      </div>
    `;

    it("should return no <option>s for no categories", () => {
      //Arrange
      const categories = [];
      //Act
      const result = mergeCategories(template, categories, "option");
      //Assert
      expect(result).to.include("<div>");
      expect(result).to.include("</div>");
      expect(result).to.include("<select>");
      expect(result).to.include("</select>");
      expect(result).to.not.include("<option>");
      expect(result).to.not.include("</option>");
      expect(result).to.not.include("<!-- Content here -->");
    });

    it("should return a single <option> for one category", () => {
      //Arrange
      const categories = ["Bootcamp"];
      //Act
      const result = mergeCategories(template, categories, "option");
      //Assert
      expect(result).to.include("<div>");
      expect(result).to.include("</div>");
      expect(result).to.include("<select>");
      expect(result).to.include("</select>");
      expect(result).to.include("<option>Bootcamp</option>");
      expect(result).to.not.include("<!-- Content here -->");
    });

    it("should return an <option> for each category", () => {
      //Arrange
      const categories = ["Bootcamp1", "Bootcamp2", "Bootcamp3"];
      //Act
      const result = mergeCategories(template, categories, "option");
      //Assert
      expect(result).to.include("<div>");
      expect(result).to.include("</div>");
      expect(result).to.include("<select>");
      expect(result).to.include("</select>");
      expect(result).to.include("<option>Bootcamp1</option>");
      expect(result).to.include("<option>Bootcamp2</option>");
      expect(result).to.include("<option>Bootcamp3</option>");
      expect(result).to.not.include("<!-- Content here -->");
    });
  });
});
