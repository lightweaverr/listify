"use client"

import { useStore } from '@/providers/zustand'
import { Track } from '@/types/types'
import { MdPlayArrow } from "react-icons/md"

type PlayTrackButtonProps = {
    variant?: "simple" | "filled",
    track: Track,
    className?: string
}

const PlayTrackButton = ({variant = "simple", track, className}: PlayTrackButtonProps) => {

    const { setCurrentTrack } = useStore(); 
    

    const simpleButtonStyle = "flex items-center col-span-1 text-white"
    const filledButtonStyle = "flex items-center justify-center rounded-full bg-spotifyGreen"


    return (
        <button
          className={`${
            variant === "filled" ? filledButtonStyle : simpleButtonStyle
          } ${className} ${!track.preview_url && ""}`}

          onClick={(e) => {
            e.preventDefault();
            if (track.preview_url) {
              setCurrentTrack(track);
            }
          }}
          disabled={track.preview_url === null}
        >
          <MdPlayArrow
            className={
              variant === "filled"
                ? "text-paper-700"
                : "flex items-center text-white"
            }
          />
        </button>
    );
}

export default PlayTrackButton