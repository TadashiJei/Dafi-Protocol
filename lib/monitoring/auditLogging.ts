export interface AuditLog {
  userId: string
  action: string
  details: string
  timestamp: Date
}

export class AuditLogger {
  private logs: AuditLog[] = []

  logAction(userId: string, action: string, details: string) {
    const log: AuditLog = {
      userId,
      action,
      details,
      timestamp: new Date()
    }
    this.logs.push(log)
    console.log('Audit Log:', log)
  }

  getLogs(userId?: string): AuditLog[] {
    if (userId) {
      return this.logs.filter(log => log.userId === userId)
    }
    return this.logs
  }

  getLogsByAction(action: string): AuditLog[] {
    return this.logs.filter(log => log.action === action)
  }

  getLogsByDateRange(startDate: Date, endDate: Date): AuditLog[] {
    return this.logs.filter(log => 
      log.timestamp >= startDate && log.timestamp <= endDate
    )
  }
}
