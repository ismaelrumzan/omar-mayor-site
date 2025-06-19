import Image from "next/image"
import Link from "next/link"

import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { GoogleMap } from "@/components/ui/iframe-googlemap"
import { VideoPlayer } from "@/components/ui/iframe-video"

import { Button } from "../ui/button"

export const components = {
  Youtube: (props) => {
    return <VideoPlayer url={`https://www.youtube.com/embed/${props.id}`} />
  },
  Googlemap: (props) => {
    return <GoogleMap url={props.src} />
  },
  Alert: (props) => {
    return (
      <Alert variant={props.type === "info" ? "default" : "destructive"}>
        <AlertTitle>{props.title}</AlertTitle>
        <AlertDescription>{props.description}</AlertDescription>
      </Alert>
    )
  },
  Image: (props) => {
    return <img src={props.src} alt={props.alt} className="object-contain" />
  },
  Button: (props) => {
    return (
      <Link href={props.link}>
        <Button variant={props.type === "primary" ? "default" : "secondary"}>
          {props.title}
        </Button>
      </Link>
    )
  },
  a: (props) => {
    if (
      props.url &&
      (props.url.startsWith("https") || props.url.startsWith("mailto:"))
    ) {
      return (
        <a
          href={props.url}
          target="_blank"
          rel="noopener noreferrer"
          {...props}
        >
          {props.children}
        </a>
      )
    } else {
      return (
        <a href={props.url} {...props}>
          {props.children}
        </a>
      )
    }
  },
}
