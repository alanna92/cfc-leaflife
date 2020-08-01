import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Post {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column({ nullable: true })
    profilePhoto?: string;

    @Column()
    postLocation: string;

    @Column()
    plantSpecies: string;

    @Column()
    comment: string;

    @Column({ nullable: true })
    postImage?: string;

    @Column()
    likeCount: number;

    @Column()
    commentsCount: number;

    @Column()
    postTime: string;
}