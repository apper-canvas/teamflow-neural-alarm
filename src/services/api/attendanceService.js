// Mock data store
let attendance = [
  {
    Id: 1,
    employeeId: "1",
    date: "2024-01-15T00:00:00.000Z",
    checkIn: "2024-01-15T09:00:00.000Z",
    checkOut: "2024-01-15T17:30:00.000Z",
    status: "Present",
    notes: ""
  },
  {
    Id: 2,
    employeeId: "2",
    date: "2024-01-15T00:00:00.000Z",
    checkIn: "2024-01-15T09:15:00.000Z",
    checkOut: "2024-01-15T18:00:00.000Z",
    status: "Late",
    notes: "Traffic delay"
  },
  {
    Id: 3,
    employeeId: "3",
    date: "2024-01-15T00:00:00.000Z",
    checkIn: "2024-01-15T08:45:00.000Z",
    checkOut: "2024-01-15T17:15:00.000Z",
    status: "Present",
    notes: ""
  },
  {
    Id: 4,
    employeeId: "4",
    date: "2024-01-15T00:00:00.000Z",
    checkIn: null,
    checkOut: null,
    status: "Absent",
    notes: "Sick leave"
  },
  {
    Id: 5,
    employeeId: "5",
    date: "2024-01-15T00:00:00.000Z",
    checkIn: "2024-01-15T09:00:00.000Z",
    checkOut: "2024-01-15T13:00:00.000Z",
    status: "Half Day",
    notes: "Personal appointment"
  },
  {
    Id: 6,
    employeeId: "1",
    date: "2024-01-16T00:00:00.000Z",
    checkIn: "2024-01-16T08:55:00.000Z",
    checkOut: "2024-01-16T17:25:00.000Z",
    status: "Present",
    notes: ""
  },
  {
    Id: 7,
    employeeId: "2",
    date: "2024-01-16T00:00:00.000Z",
    checkIn: "2024-01-16T09:00:00.000Z",
    checkOut: "2024-01-16T17:45:00.000Z",
    status: "Present",
    notes: ""
  },
  {
    Id: 8,
    employeeId: "3",
    date: "2024-01-16T00:00:00.000Z",
    checkIn: "2024-01-16T09:20:00.000Z",
    checkOut: "2024-01-16T17:30:00.000Z",
    status: "Late",
    notes: "Meeting ran over"
  }
];

const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

export const attendanceService = {
  async getAll() {
    await delay(300);
    return [...attendance];
  },

  async getById(id) {
    await delay(200);
    const record = attendance.find(att => att.Id === parseInt(id));
    if (!record) {
      throw new Error(`Attendance record with ID ${id} not found`);
    }
    return { ...record };
  },

  async getByEmployeeId(employeeId) {
    await delay(200);
    return attendance.filter(att => att.employeeId === employeeId.toString());
  },

  async getByDate(date) {
    await delay(200);
    const targetDate = new Date(date).toISOString().split('T')[0];
    return attendance.filter(att => {
      const recordDate = new Date(att.date).toISOString().split('T')[0];
      return recordDate === targetDate;
    });
  },

  async create(attendanceData) {
    await delay(500);
    const maxId = Math.max(...attendance.map(att => att.Id), 0);
    const newRecord = {
      ...attendanceData,
      Id: maxId + 1
    };
    attendance.push(newRecord);
    return { ...newRecord };
  },

  async update(id, attendanceData) {
    await delay(400);
    const index = attendance.findIndex(att => att.Id === parseInt(id));
    if (index === -1) {
      throw new Error(`Attendance record with ID ${id} not found`);
    }
    const updatedRecord = {
      ...attendanceData,
      Id: parseInt(id)
    };
    attendance[index] = updatedRecord;
    return { ...updatedRecord };
  },

  async delete(id) {
    await delay(300);
    const index = attendance.findIndex(att => att.Id === parseInt(id));
    if (index === -1) {
      throw new Error(`Attendance record with ID ${id} not found`);
    }
    const deletedRecord = attendance.splice(index, 1)[0];
    return { ...deletedRecord };
  }
};