// Import Manager class
const Manager = require("../lib/manager");

// OBJECT TESTS

// Test object instantiation
test("A new manager object can be created", () => {
  const employeeObject = new Manager();
  expect(typeof employeeObject).toBe("object");
});

// Test to see if officeNumber property has been added to Manager object
test("An office number can be added to the Manager object", () => {
  const testOfficeNumber = 4;
  const employeeInstance = new Manager(
    "John Smith",
    1234,
    "johnsmith@example.com",
    "assetsapp_imgmanager.jpg",
    testOfficeNumber
  );
  expect(employeeInstance.officeNumber).toBe(testOfficeNumber);
});

test("Manager has been added as the value for the property of role", () => {
  const returnValue = "Manager";
  const employeeInstance = new Manager(
    "John Smith",
    1234,
    "johnsmith@example.com",
    "assetsapp_imgmanager.jpg",
    4
  );
  expect(employeeInstance.getRole()).toBe(returnValue);
});

// METHOD TESTS

test("office number is retrieved through the getOfficeNumber() method", () => {
  const testOfficeNumber = 4;
  const employeeInstance = new Manager(
    "John Smith",
    1234,
    "johnsmith@example.com",
    "assetsapp_imgmanager.jpg",
    testOfficeNumber
  );
  expect(employeeInstance.getOfficeNumber()).toBe(testOfficeNumber);
});
