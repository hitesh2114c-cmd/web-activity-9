class Student:
    def __init__(self, name, marks):
        self.name = name
        self._marks = marks  # protected

class Results(Student):
    def show_result(self):
        print("student name:", self.name)
        print("student marks:", self._marks)

        if self._marks >= 40:
            print("Result: PASS")
        else:
            print("Result: FAIL")

s1 = Results("Ravi", 75)
s1.show_result()
