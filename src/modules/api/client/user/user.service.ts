import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { User, UserDocument } from '@schema';
import { Model } from 'mongoose';

@Injectable()
export class UserService {
  constructor(@InjectModel(User.name) public userModel: Model<UserDocument>) {}

  async create(user: User): Promise<User> {
    const newUser = new this.userModel(user);
    return await newUser.save();
  }

  findAll() {
    return this.userModel.find({});
  }

  async findOne(id: string) {
    return this.userModel.findOne({
      where: {
        _id: id,
      },
    });
  }

  async update(_id: string, updateUserDto: any) {
    return this.userModel.findOneAndUpdate(
      {
        _id,
      },
      updateUserDto,
      { returnDocument: 'after' },
    );
  }

  remove(id: string) {
    return `This action removes a #${id} user`;
  }
}
