'use client'
import React from "react";
import { BsPersonCircle, BsStopwatchFill } from "react-icons/bs";
import { HiStar } from "react-icons/hi";
import {Avatar, AvatarGroup, Tooltip} from "@nextui-org/react";
import Link from "next/link";

export default function ProjectCard({item}) {
  return (
    <div className="bg-gray-900 rounded-xl p-3 space-y-3 cursor-pointer">
      <div className="flex items-center justify-between">
        <Link href={`/dashboard/projects?projectID=${encodeURIComponent(item.title)}&tab=timeline`}>
          <h1 className="text-xl border-l-4 border-orange-600 px-2">{item.title}</h1>
        </Link>
        <span><HiStar size={20}/></span>
      </div>
      <div className="flex items-center justify-end space-x-3">
        <p className="w-fit text-xs px-4 py-1 bg-gray-800 rounded-full flex items-center space-x-2">
            <span className="text-cyan-400"><BsPersonCircle/></span>
            <span>Your</span>
        </p>
        <p className="w-fit text-xs px-4 py-1 bg-gray-800 rounded-full flex items-center space-x-2">
            <span className="text-lime-400"><BsStopwatchFill/></span>
            <span>{item.finishDate}</span>
        </p>
      </div>
      <div className="p-2 rounded-md bg-gray-800 text-sm text-gray-400">{item.description}</div>
      <div className="flex items-center justify-between">
        <div className="flex items-center justify-end space-x-3">
          <p className="w-fit text-xs px-4 py-1 bg-gray-800 rounded-full flex items-center">
              <span>4 Done</span>
          </p>
          <p className="w-fit text-xs px-4 py-1 bg-gray-800 rounded-full flex items-center">
            <span>12 Going </span>
          </p>
        </div>
        <AvatarGroup isBordered className="dark" size="sm" max={3} total={item.team.length}>
          {item.team?.map((t, i)=>(
            <Tooltip key={i} color={'success'} content={t.name}>
              <Avatar size="sm" src={t.src}/>
            </Tooltip>
          ))}
        </AvatarGroup>
      </div>
    </div>
  );
}
