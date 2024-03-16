class MinStack {
  private stack: { val: number; min: number }[];
  constructor() {
    this.stack = [];
  }

  push(val: number): void {
    this.stack.push({
      val: val,
      min: this.stack.length ? Math.min(this.getMin(), val) : val,
    });
  }

  pop(): void {
    this.stack.pop();
  }

  top(): number {
    return this.stack[this.stack.length - 1].val;
    // Error if not existent
  }

  getMin(): number {
    return this.stack[this.stack.length - 1].min;
    // Error if not existent
  }
}

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */
