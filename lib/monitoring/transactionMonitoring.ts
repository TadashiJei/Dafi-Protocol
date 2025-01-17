export interface Transaction {
  id: string
  userId: string
  amount: number
  timestamp: Date
  type: 'deposit' | 'withdrawal' | 'transfer'
  status: 'pending' | 'completed' | 'failed'
}

export class TransactionMonitor {
  private transactions: Map<string, Transaction> = new Map()

  addTransaction(transaction: Transaction) {
    this.transactions.set(transaction.id, transaction)
  }

  getTransaction(id: string): Transaction | undefined {
    return this.transactions.get(id)
  }

  getAllTransactions(): Transaction[] {
    return Array.from(this.transactions.values())
  }

  getTransactionsByUser(userId: string): Transaction[] {
    return this.getAllTransactions().filter(t => t.userId === userId)
  }

  getTransactionsByType(type: Transaction['type']): Transaction[] {
    return this.getAllTransactions().filter(t => t.type === type)
  }

  getTransactionsByStatus(status: Transaction['status']): Transaction[] {
    return this.getAllTransactions().filter(t => t.status === status)
  }
}
