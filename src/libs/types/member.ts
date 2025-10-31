import {ObjectId} from "mongoose";
import { MemberStatus, MemberType } from "../enums/member.enum";
import {Request} from "express"
import { Session } from "express-session";


export interface Member {
  _id: ObjectId;
  memberType: MemberType;
  memberStatus: MemberStatus;
  memberNick: string;
  memberPhone: string;
  memberPassword?: string;
  memberAddress?: string;
  memberdesc?: string;
  memberImage?: string;
  memberPoitns: number;
  createdAt: Date;
  updatedAt: Date;
}


export interface MemberInput {
  memberType?: MemberType;
  memberStatus?: MemberStatus;
  memberNick: string;
  memberPhone: string;
  memberPassword: string;
  memberAddress?: string;
  memberdesc?: string;
  memberImage?: string;
  memberPoitns?: number;
}

export interface LoginInput {
  memberNick: string;
  memberPassword: string;
}

export interface MemberUpdateInput {
  _id: ObjectId;
  memberStatus?: MemberStatus;
  memberNick?: string;
  memberPhone?: string;
  memberPassword?: string;
  memberAddress?: string;
  memberdesc?: string;
  memberImage?: string;
}

export interface AdminRequest extends Request {
  member: Member,
  session: Session & {member: Member};
  file: Express.Multer.File;
  files: Express.Multer.File[];
}