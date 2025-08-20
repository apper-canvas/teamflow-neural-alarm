import leaveRequestsData from "@/services/mockData/leaveRequests.json";

let leaveRequests = [...leaveRequestsData];

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