import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
  private users = [
    {
      id: '1',
      name: 'John Doe',
      age: 30,
      role: 'EMPLOYEE',
    },
    {
      id: '2',
      name: 'Jane Doe',
      age: 25,
      role: 'ADMIN',
    },
    {
      id: '3',
      name: 'Alice',
      age: 35,
      role: 'MANAGER',
    },
    {
      id: '4',
      name: 'Bob',
      age: 40,
      role: 'EMPLOYEE',
    },
    {
      id: '5',
      name: 'Charlie',
      age: 45,
      role: 'INTERN',
    },
  ];

  findAll(role?: 'INTERN' | 'MANAGER' | 'EMPLOYEE') {
    if (role) {
      return this.users.filter((user) => user.role === role);
    }
    return this.users;
  }

  findOne(id: string) {
    const user = this.users.find((user) => user.id === id);
    return user;
  }

  create(user: {
    name: string;
    age: number;
    role: 'INTERN' | 'MANAGER' | 'EMPLOYEE';
  }) {
    const newUser = {
      id: (this.users.length + 1).toString(),
      ...user,
    };
    this.users.push(newUser);
    return newUser;
  }

  update(
    id: string,
    userUpdate: {
      name?: string;
      age?: number;
      role?: 'INTERN' | 'MANAGER' | 'EMPLOYEE';
    },
  ) {
    this.users = this.users.map((user) => {
      if (user.id === id) {
        return { ...user, ...userUpdate };
      }
      return this.findOne(id);
    });
  }

  delete(id: string) {
    const deleteUser = this.findOne(id);
    this.users = this.users.filter((user) => user.id !== id);
    return deleteUser;
  }
}
