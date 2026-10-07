import type {task} from '../components/Task'

export const initialTasks: task[] = [
  {
    id: 1,
    taskName: "Build navigation bar",
    employeeId: 1,
    priority: "High",
    estimatedHours: 3,
    isCompleted: true
  },
  {
    id: 2,
    taskName: "Create dashboard layout",
    employeeId: 1,
    priority: "Very High",
    estimatedHours: 5,
    isCompleted: true
  },
  {
    id: 3,
    taskName: "Fix responsive design issues",
    employeeId: 1,
    priority: "Normal",
    estimatedHours: 2,
    isCompleted: false
  },

  {
    id: 4,
    taskName: "Create authentication API",
    employeeId: 2,
    priority: "Very High",
    estimatedHours: 6,
    isCompleted: true
  },
  {
    id: 5,
    taskName: "Optimize database queries",
    employeeId: 2,
    priority: "High",
    estimatedHours: 4,
    isCompleted: false
  },
  {
    id: 6,
    taskName: "Add user profile endpoint",
    employeeId: 2,
    priority: "Normal",
    estimatedHours: 3,
    isCompleted: false
  },

  {
    id: 7,
    taskName: "Configure deployment pipeline",
    employeeId: 3,
    priority: "Very High",
    estimatedHours: 5,
    isCompleted: true
  },
  {
    id: 8,
    taskName: "Set up Docker containers",
    employeeId: 3,
    priority: "High",
    estimatedHours: 4,
    isCompleted: true
  },
  {
    id: 9,
    taskName: "Monitor production logs",
    employeeId: 3,
    priority: "Normal",
    estimatedHours: 2,
    isCompleted: false
  },

  {
    id: 10,
    taskName: "Connect frontend to backend",
    employeeId: 4,
    priority: "Very High",
    estimatedHours: 5,
    isCompleted: true
  },
  {
    id: 11,
    taskName: "Implement task filtering",
    employeeId: 4,
    priority: "High",
    estimatedHours: 3,
    isCompleted: false
  },
  {
    id: 12,
    taskName: "Write integration tests",
    employeeId: 4,
    priority: "Normal",
    estimatedHours: 4,
    isCompleted: false
  }
]

