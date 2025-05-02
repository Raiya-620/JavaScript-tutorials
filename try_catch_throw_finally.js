function divide(num1, num2) {
  if (num2 == 0) {
    throw new Error("You cannot divide by zero");
  }
  return num1 / num2;
}


try {
    document.writeln(divide(3,0))
} catch (error) {
    document.writeln("We found this error: ", error.message)
}finally{
    document.writeln("Who cares, numbers are numbers");
}