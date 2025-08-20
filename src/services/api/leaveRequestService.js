// Mock data store
let leaveRequests = [
  {
    Id: 1,
    employeeId: "1",
    startDate: "2024-02-15T00:00:00.000Z",
    endDate: "2024-02-16T00:00:00.000Z",
    type: "Vacation",
    reason: "Weekend getaway",
    status: "Approved",
    approvedBy: "Jessica Brown",
    requestDate: "2024-01-20T10:30:00.000Z"
  },
  {
    Id: 2,
    employeeId: "2",
    startDate: "2024-02-20T00:00:00.000Z",
    endDate: "2024-02-22T00:00:00.000Z",
    type: "Sick",
    reason: "Medical appointment",
    status: "Pending",
    approvedBy: "",
    requestDate: "2024-01-18T14:15:00.000Z"
  },
  {
    Id: 3,
    employeeId: "3",
    startDate: "2024-03-01T00:00:00.000Z",
    endDate: "2024-03-05T00:00:00.000Z",
    type: "Vacation",
    reason: "Family vacation",
    status: "Approved",
    approvedBy: "Jessica Brown",
    requestDate: "2024-01-25T09:45:00.000Z"
  },
  {
    Id: 4,
    employeeId: "4",
    startDate: "2024-01-22T00:00:00.000Z",
    endDate: "2024-01-24T00:00:00.000Z",
    type: "Personal",
    reason: "Moving to new apartment",
    status: "Rejected",
    approvedBy: "Jessica Brown",
    requestDate: "2024-01-15T11:20:00.000Z"
  },
  {
    Id: 5,
    employeeId: "6",
    startDate: "2024-02-10T00:00:00.000Z",
    endDate: "2024-02-10T00:00:00.000Z",
    type: "Sick",
    reason: "Doctor appointment",
    status: "Approved",
    approvedBy: "Jessica Brown",
    requestDate: "2024-02-08T16:00:00.000Z"
  },
  {
    Id: 6,
    employeeId: "7",
    startDate: "2024-02-28T00:00:00.000Z",
    endDate: "2024-03-03T00:00:00.000Z",
    type: "Vacation",
    reason: "Spring break trip",
    status: "Pending",
    approvedBy: "",
    requestDate: "2024-01-30T13:30:00.000Z"
  }
];

const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

export const leaveRequestService = {
  async getAll() {
    await delay(300);
    return [...leaveRequests];
  },

  async getById(id) {
    await delay(200);
    const request = leaveRequests.find(req => req.Id === parseInt(id));
    if (!request) {
      throw new Error(`Leave request with ID ${id} not found`);
    }
    return { ...request };
  },

  async getByEmployeeId(employeeId) {
    await delay(200);
    return leaveRequests.filter(req => req.employeeId === employeeId.toString());
  },

  async getByStatus(status) {
    await delay(200);
    if (!status) return [...leaveRequests];
    return leaveRequests.filter(req => req.status === status);
  },

  async create(leaveRequestData) {
    await delay(500);
    const maxId = Math.max(...leaveRequests.map(req => req.Id), 0);
    const newRequest = {
      ...leaveRequestData,
      Id: maxId + 1,
      requestDate: new Date().toISOString(),
      status: "Pending"
    };
    leaveRequests.push(newRequest);
    return { ...newRequest };
  },

  async update(id, leaveRequestData) {
    await delay(400);
    const index = leaveRequests.findIndex(req => req.Id === parseInt(id));
    if (index === -1) {
      throw new Error(`Leave request with ID ${id} not found`);
    }
    const updatedRequest = {
      ...leaveRequestData,
      Id: parseInt(id)
    };
    leaveRequests[index] = updatedRequest;
    return { ...updatedRequest };
  },

  async approve(id, approvedBy) {
    await delay(400);
    const index = leaveRequests.findIndex(req => req.Id === parseInt(id));
    if (index === -1) {
      throw new Error(`Leave request with ID ${id} not found`);
    }
    leaveRequests[index].status = "Approved";
    leaveRequests[index].approvedBy = approvedBy;
    return { ...leaveRequests[index] };
  },

  async reject(id, approvedBy) {
    await delay(400);
    const index = leaveRequests.findIndex(req => req.Id === parseInt(id));
    if (index === -1) {
      throw new Error(`Leave request with ID ${id} not found`);
    }
    leaveRequests[index].status = "Rejected";
    leaveRequests[index].approvedBy = approvedBy;
    return { ...leaveRequests[index] };
  },

  async delete(id) {
    await delay(300);
    const index = leaveRequests.findIndex(req => req.Id === parseInt(id));
    if (index === -1) {
      throw new Error(`Leave request with ID ${id} not found`);
    }
    const deletedRequest = leaveRequests.splice(index, 1)[0];
    return { ...deletedRequest };
  }
};