import employeesData from "@/services/mockData/employees.json";

let employees = [...employeesData];

const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

export const employeeService = {
  async getAll() {
    await delay(300);
    return [...employees];
  },

  async getById(id) {
    await delay(200);
    const employee = employees.find(emp => emp.Id === parseInt(id));
    if (!employee) {
      throw new Error(`Employee with ID ${id} not found`);
    }
    return { ...employee };
  },

  async create(employeeData) {
    await delay(500);
    const maxId = Math.max(...employees.map(emp => emp.Id), 0);
    const newEmployee = {
      ...employeeData,
      Id: maxId + 1
    };
    employees.push(newEmployee);
    return { ...newEmployee };
  },

  async update(id, employeeData) {
    await delay(400);
    const index = employees.findIndex(emp => emp.Id === parseInt(id));
    if (index === -1) {
      throw new Error(`Employee with ID ${id} not found`);
    }
    const updatedEmployee = {
      ...employeeData,
      Id: parseInt(id)
    };
    employees[index] = updatedEmployee;
    return { ...updatedEmployee };
  },

  async delete(id) {
    await delay(300);
    const index = employees.findIndex(emp => emp.Id === parseInt(id));
    if (index === -1) {
      throw new Error(`Employee with ID ${id} not found`);
    }
    const deletedEmployee = employees.splice(index, 1)[0];
    return { ...deletedEmployee };
  },

  async search(query) {
    await delay(200);
    const lowerQuery = query.toLowerCase();
    return employees.filter(emp => 
      emp.firstName.toLowerCase().includes(lowerQuery) ||
      emp.lastName.toLowerCase().includes(lowerQuery) ||
      emp.email.toLowerCase().includes(lowerQuery) ||
      emp.department.toLowerCase().includes(lowerQuery) ||
      emp.role.toLowerCase().includes(lowerQuery)
    );
  },

  async filterByDepartment(department) {
    await delay(200);
    if (!department) return [...employees];
    return employees.filter(emp => emp.department === department);
  }
};