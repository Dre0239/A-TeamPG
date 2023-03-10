// Import Intern class
const Intern = require("../lib/intern");

// OBJECT TESTS

// Test object instantiation
test("A new intern object can be created", () => {
  const internObject = new Intern();
  expect(typeof internObject).toBe("object");
});

// Test to see if a school property has been added to the Intern object
test("A school can be added to the school property of the Intern object", () => {
  const testInstitution = "University of Birmingham";
  const internInstance = new Intern(
    "John Smith",
    2697,
    "jsmith@email.com",
    "assetsapp_imgintern.jpg",
    testInstitution
  );
  expect(internInstance.school).toBe("University of Birmingham");
});

// Test to see if the property role has the value Intern
test("Intern has been added as the value for the property of role", () => {
  const returnValue = "Intern";
  const internInstance = new Intern(
    "John Smith",
    2697,
    "jsmith@email.com",
    "assetsapp_imgintern.jpg",
    "University of Birmingham"
  );
  expect(internInstance.getRole()).toBe(returnValue);
});

// METHOD TESTS

// Test to see if getSchool() method works
test("school is retrieved through the getSchool() method", () => {
  const testInstitution = "University of Birmingham";
  const internInstance = new Intern(
    "John Smith",
    2697,
    "jsmith@email.com",
    "assetsapp_imgintern.jpg",
    testInstitution
  );
  expect(internInstance.getSchool()).toBe(testInstitution);
});
