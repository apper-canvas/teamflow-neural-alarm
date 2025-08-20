// Mock data store
let departments = [
  {
    Id: 1,
    name: "Engineering",
    managerId: "1",
    employeeCount: 3,
    description: "Software development and technical infrastructure"
  },
  {
    Id: 2,
    name: "Marketing",
    managerId: "2",
    employeeCount: 2,
    description: "Brand management and customer acquisition"
  },
  {
    Id: 3,
    name: "Design",
    managerId: "3",
    employeeCount: 1,
    description: "User experience and visual design"
  },
  {
    Id: 4,
    name: "Sales",
    managerId: "4",
    employeeCount: 1,
    description: "Customer relationship management and revenue generation"
  },
  {
    Id: 5,
    name: "HR",
    managerId: "5",
    employeeCount: 1,
    description: "Human resources and employee relations"
  },
  {
    Id: 6,
    name: "Finance",
    managerId: "6",
    employeeCount: 1,
    description: "Financial planning and analysis"
  }
];

const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

export const departmentService = {
  async getAll() {
    await delay(300);
    return [...departments];
  },

  async getById(id) {
    await delay(200);
    const department = departments.find(dept => dept.Id === parseInt(id));
    if (!department) {
      throw new Error(`Department with ID ${id} not found`);
    }
    return { ...department };
  },

  async create(departmentData) {
    await delay(500);
    const maxId = Math.max(...departments.map(dept => dept.Id), 0);
    const newDepartment = {
      ...departmentData,
      Id: maxId + 1,
      employeeCount: 0
    };
    departments.push(newDepartment);
    return { ...newDepartment };
  },

  async update(id, departmentData) {
    await delay(400);
    const index = departments.findIndex(dept => dept.Id === parseInt(id));
    if (index === -1) {
      throw new Error(`Department with ID ${id} not found`);
    }
    const updatedDepartment = {
      ...departmentData,
      Id: parseInt(id)
    };
    departments[index] = updatedDepartment;
    return { ...updatedDepartment };
  },

  async delete(id) {
    await delay(300);
    const index = departments.findIndex(dept => dept.Id === parseInt(id));
    if (index === -1) {
      throw new Error(`Department with ID ${id} not found`);
    }
    const deletedDepartment = departments.splice(index, 1)[0];
    return { ...deletedDepartment };
  }
};