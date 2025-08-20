// Mock data store
let employees = [
  {
    Id: 1,
    firstName: "Sarah",
    lastName: "Johnson",
    email: "sarah.johnson@teamflow.com",
    phone: "+1 (555) 123-4567",
    photoUrl: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face",
    department: "Engineering",
    role: "Senior Software Engineer",
    hireDate: "2022-03-15T00:00:00.000Z",
    salary: 95000,
    status: "Active",
    address: {
      street: "123 Tech Street",
      city: "San Francisco",
      state: "CA",
      zipCode: "94105"
    },
    emergencyContact: {
      name: "Michael Johnson",
      relationship: "Spouse",
      phone: "+1 (555) 123-4568"
    }
  },
  {
    Id: 2,
    firstName: "Michael",
    lastName: "Chen",
    email: "michael.chen@teamflow.com",
    phone: "+1 (555) 234-5678",
    photoUrl: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
    department: "Marketing",
    role: "Marketing Manager",
    hireDate: "2021-08-22T00:00:00.000Z",
    salary: 75000,
    status: "Active",
    address: {
      street: "456 Marketing Ave",
      city: "Los Angeles",
      state: "CA",
      zipCode: "90210"
    },
    emergencyContact: {
      name: "Lisa Chen",
      relationship: "Sister",
      phone: "+1 (555) 234-5679"
    }
  },
  {
    Id: 3,
    firstName: "Emily",
    lastName: "Rodriguez",
    email: "emily.rodriguez@teamflow.com",
    phone: "+1 (555) 345-6789",
    photoUrl: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
    department: "Design",
    role: "UX Designer",
    hireDate: "2023-01-10T00:00:00.000Z",
    salary: 70000,
    status: "Active",
    address: {
      street: "789 Design Plaza",
      city: "Austin",
      state: "TX",
      zipCode: "73301"
    },
    emergencyContact: {
      name: "Carlos Rodriguez",
      relationship: "Father",
      phone: "+1 (555) 345-6790"
    }
  },
  {
    Id: 4,
    firstName: "David",
    lastName: "Wilson",
    email: "david.wilson@teamflow.com",
    phone: "+1 (555) 456-7890",
    photoUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
    department: "Sales",
    role: "Sales Representative",
    hireDate: "2022-11-05T00:00:00.000Z",
    salary: 60000,
    status: "On Leave",
    address: {
      street: "321 Sales Blvd",
      city: "Miami",
      state: "FL",
      zipCode: "33101"
    },
    emergencyContact: {
      name: "Jennifer Wilson",
      relationship: "Spouse",
      phone: "+1 (555) 456-7891"
    }
  },
  {
    Id: 5,
    firstName: "Jessica",
    lastName: "Brown",
    email: "jessica.brown@teamflow.com",
    phone: "+1 (555) 567-8901",
    photoUrl: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop&crop=face",
    department: "HR",
    role: "HR Specialist",
    hireDate: "5/20/2021 12:00:00 AMZ",
    salary: 65000,
    status: "Active",
    address: {
      street: "654 HR Circle",
      city: "Seattle",
      state: "WA",
      zipCode: "98101"
    },
    emergencyContact: {
      name: "Robert Brown",
      relationship: "Brother",
      phone: "+1 (555) 567-8902"
    }
  },
  {
    Id: 6,
    firstName: "Robert",
    lastName: "Davis",
    email: "robert.davis@teamflow.com",
    phone: "+1 (555) 678-9012",
    photoUrl: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face",
    department: "Finance",
    role: "Financial Analyst",
    hireDate: "2022-07-12T00:00:00.000Z",
    salary: 72000,
    status: "Active",
    address: {
      street: "987 Finance Way",
      city: "New York",
      state: "NY",
      zipCode: "10001"
    },
    emergencyContact: {
      name: "Mary Davis",
      relationship: "Mother",
      phone: "+1 (555) 678-9013"
    }
  },
  {
    Id: 7,
    firstName: "Amanda",
    lastName: "Taylor",
    email: "amanda.taylor@teamflow.com",
    phone: "+1 (555) 789-0123",
    photoUrl: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&crop=face",
    department: "Engineering",
    role: "DevOps Engineer",
    hireDate: "2023-02-28T00:00:00.000Z",
    salary: 88000,
    status: "Active",
    address: {
      street: "147 DevOps Lane",
      city: "Denver",
      state: "CO",
      zipCode: "80202"
    },
    emergencyContact: {
      name: "James Taylor",
      relationship: "Spouse",
      phone: "+1 (555) 789-0124"
    }
  },
  {
    Id: 8,
    firstName: "Christopher",
    lastName: "Anderson",
    email: "chris.anderson@teamflow.com",
    phone: "+1 (555) 890-1234",
    photoUrl: "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?w=150&h=150&fit=crop&crop=face",
    department: "Marketing",
    role: "Content Strategist",
    hireDate: "2021-12-01T00:00:00.000Z",
    salary: 68000,
    status: "Active",
    address: {
      street: "258 Content Court",
      city: "Portland",
      state: "OR",
      zipCode: "97201"
    },
    emergencyContact: {
      name: "Sarah Anderson",
      relationship: "Sister",
      phone: "+1 (555) 890-1235"
    }
  }
];

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