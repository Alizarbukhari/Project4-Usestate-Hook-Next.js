"use client"
import Link from "next/link"
import React from "react"
import Head from "next/head"
import Button from "./components/button/Button"
import Card from "./components/card/Card"
import Tag from "./tag/Tag"
import Counter from "./components/counter/Counter"
export default function Home(){
  return(
    <div>
      <Link href={"../about"}>About</Link>
<p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illum iusto, omnis quas nostrum veniam ad repudiandae quaerat pariatur perferendis vel consequuntur, a voluptas! Eum odit ratione quisquam libero dolorum vel? 5</p>
<Card/>
<Tag/>
<Button title="Apply" data = "tick "/>
<Tag/>
<Counter/>
    </div>
  )
}