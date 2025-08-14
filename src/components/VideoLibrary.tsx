import { useState, useEffect } from 'react'
import { Play, Upload, Link, Plus } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { supabase, type Video } from '@/lib/supabase'
import { toast } from '@/components/ui/use-toast'

const VideoLibrary = () => {
  const [videos, setVideos] = useState<Video[]>([])
  const [isUploading, setIsUploading] = useState(false)
  const [showUploadDialog, setShowUploadDialog] = useState(false)

  // Form states
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [youtubeUrl, setYoutubeUrl] = useState('')
  const [selectedFile, setSelectedFile] = useState<File | null>(null)

  useEffect(() => {
    fetchVideos()
  }, [])

  const fetchVideos = async () => {
    const { data, error } = await supabase
      .from('videos')
      .select('*')
      .order('created_at', { ascending: false })

    if (error) {
      console.error('Error fetching videos:', error)
      return
    }

    setVideos(data || [])
  }

  const extractYouTubeId = (url: string) => {
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/
    const match = url.match(regExp)
    return match && match[2].length === 11 ? match[2] : null
  }

  const handleYouTubeUpload = async () => {
    if (!title || !youtubeUrl) {
      toast({
        title: "Missing Information",
        description: "Please provide a title and YouTube URL",
        variant: "destructive"
      })
      return
    }

    const videoId = extractYouTubeId(youtubeUrl)
    if (!videoId) {
      toast({
        title: "Invalid URL",
        description: "Please provide a valid YouTube URL",
        variant: "destructive"
      })
      return
    }

    setIsUploading(true)

    const videoData = {
      title,
      description,
      video_url: youtubeUrl,
      thumbnail_url: `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`,
      video_type: 'youtube' as const
    }

    const { error } = await supabase
      .from('videos')
      .insert([videoData])

    if (error) {
      toast({
        title: "Upload Failed",
        description: "Failed to add YouTube video",
        variant: "destructive"
      })
      console.error('Error uploading video:', error)
    } else {
      toast({
        title: "Success!",
        description: "YouTube video added successfully"
      })
      setShowUploadDialog(false)
      resetForm()
      fetchVideos()
    }

    setIsUploading(false)
  }

  const handleFileUpload = async () => {
    if (!title || !selectedFile) {
      toast({
        title: "Missing Information",
        description: "Please provide a title and select a file",
        variant: "destructive"
      })
      return
    }

    setIsUploading(true)

    // Upload file to Supabase storage
    const fileExt = selectedFile.name.split('.').pop()
    const fileName = `${Date.now()}.${fileExt}`
    const filePath = `videos/${fileName}`

    const { error: uploadError } = await supabase.storage
      .from('videos')
      .upload(filePath, selectedFile)

    if (uploadError) {
      toast({
        title: "Upload Failed",
        description: "Failed to upload video file",
        variant: "destructive"
      })
      console.error('Error uploading file:', uploadError)
      setIsUploading(false)
      return
    }

    const { data: urlData } = supabase.storage
      .from('videos')
      .getPublicUrl(filePath)

    const videoData = {
      title,
      description,
      video_url: urlData.publicUrl,
      video_type: 'upload' as const
    }

    const { error } = await supabase
      .from('videos')
      .insert([videoData])

    if (error) {
      toast({
        title: "Upload Failed",
        description: "Failed to save video information",
        variant: "destructive"
      })
      console.error('Error saving video:', error)
    } else {
      toast({
        title: "Success!",
        description: "Video uploaded successfully"
      })
      setShowUploadDialog(false)
      resetForm()
      fetchVideos()
    }

    setIsUploading(false)
  }

  const resetForm = () => {
    setTitle('')
    setDescription('')
    setYoutubeUrl('')
    setSelectedFile(null)
  }

  const renderVideo = (video: Video) => {
    if (video.video_type === 'youtube') {
      const videoId = extractYouTubeId(video.video_url)
      return (
        <div className="aspect-video w-full">
          <iframe
            width="100%"
            height="100%"
            src={`https://www.youtube.com/embed/${videoId}`}
            title={video.title}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="rounded-lg"
          />
        </div>
      )
    } else {
      return (
        <div className="aspect-video w-full">
          <video
            controls
            className="w-full h-full object-cover rounded-lg"
            poster={video.thumbnail_url}
          >
            <source src={video.video_url} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      )
    }
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            ✨ Video Library
          </h1>
          <p className="text-xl text-muted-foreground mb-8">
            Made Simple & Seamless 🎥
          </p>
          
          <Dialog open={showUploadDialog} onOpenChange={setShowUploadDialog}>
            <DialogTrigger asChild>
              <Button size="lg" className="gap-2">
                <Plus className="w-5 h-5" />
                Add New Video
              </Button>
            </DialogTrigger>
            <DialogContent className="max-w-md">
              <DialogHeader>
                <DialogTitle>Add New Video</DialogTitle>
              </DialogHeader>
              
              <Tabs defaultValue="youtube" className="w-full">
                <TabsList className="grid w-full grid-cols-2">
                  <TabsTrigger value="youtube" className="gap-2">
                    <Link className="w-4 h-4" />
                    YouTube
                  </TabsTrigger>
                  <TabsTrigger value="upload" className="gap-2">
                    <Upload className="w-4 h-4" />
                    Upload
                  </TabsTrigger>
                </TabsList>
                
                <TabsContent value="youtube" className="space-y-4">
                  <div>
                    <Label htmlFor="youtube-title">Title</Label>
                    <Input
                      id="youtube-title"
                      value={title}
                      onChange={(e) => setTitle(e.target.value)}
                      placeholder="Enter video title"
                    />
                  </div>
                  <div>
                    <Label htmlFor="youtube-description">Description</Label>
                    <Textarea
                      id="youtube-description"
                      value={description}
                      onChange={(e) => setDescription(e.target.value)}
                      placeholder="Enter video description"
                      rows={3}
                    />
                  </div>
                  <div>
                    <Label htmlFor="youtube-url">YouTube URL</Label>
                    <Input
                      id="youtube-url"
                      value={youtubeUrl}
                      onChange={(e) => setYoutubeUrl(e.target.value)}
                      placeholder="https://youtube.com/watch?v=..."
                    />
                  </div>
                  <Button 
                    onClick={handleYouTubeUpload} 
                    disabled={isUploading}
                    className="w-full"
                  >
                    {isUploading ? 'Adding...' : 'Add YouTube Video'}
                  </Button>
                </TabsContent>
                
                <TabsContent value="upload" className="space-y-4">
                  <div>
                    <Label htmlFor="upload-title">Title</Label>
                    <Input
                      id="upload-title"
                      value={title}
                      onChange={(e) => setTitle(e.target.value)}
                      placeholder="Enter video title"
                    />
                  </div>
                  <div>
                    <Label htmlFor="upload-description">Description</Label>
                    <Textarea
                      id="upload-description"
                      value={description}
                      onChange={(e) => setDescription(e.target.value)}
                      placeholder="Enter video description"
                      rows={3}
                    />
                  </div>
                  <div>
                    <Label htmlFor="upload-file">Video File</Label>
                    <Input
                      id="upload-file"
                      type="file"
                      accept="video/*"
                      onChange={(e) => setSelectedFile(e.target.files?.[0] || null)}
                    />
                  </div>
                  <Button 
                    onClick={handleFileUpload} 
                    disabled={isUploading}
                    className="w-full"
                  >
                    {isUploading ? 'Uploading...' : 'Upload Video'}
                  </Button>
                </TabsContent>
              </Tabs>
            </DialogContent>
          </Dialog>
        </div>

        {videos.length === 0 ? (
          <div className="text-center py-12">
            <Play className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-foreground mb-2">
              No videos yet
            </h3>
            <p className="text-muted-foreground">
              Add your first video to get started!
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {videos.map((video) => (
              <Card key={video.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                <CardContent className="p-0">
                  {renderVideo(video)}
                  <div className="p-6">
                    <h3 className="font-semibold text-lg text-foreground mb-2">
                      {video.title}
                    </h3>
                    {video.description && (
                      <p className="text-muted-foreground text-sm">
                        {video.description}
                      </p>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

export default VideoLibrary