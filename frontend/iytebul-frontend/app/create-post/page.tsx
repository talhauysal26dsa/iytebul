"use client"

import type React from "react"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Home, LogOut, Mail, Menu, User, Upload } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Separator } from "@/components/ui/separator"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

// Define the locations array for reuse
const LOCATIONS = [
  "Bilgisayar Mühendisliği",
  "Elektrik Elektronik Mühendisliği",
  "Makine Mühendisliği",
  "Kimya Mühendisliği",
  "Mimarlık",
  "Şehir ve Bölge Planlama",
  "Fizik",
  "Kimya",
  "Matematik",
  "Çevre Mühendisliği",
  "Gıda Mühendisliği",
  "Moleküler Biyoloji ve Genetik",
  "Endüstri Mühendisliği",
  "İnşaat Mühendisliği",
  "Bilim Parkı",
  "Şenlik Alanı",
  "Gösteri Merkezi",
  "Hazırlık Binası",
  "Üniyurt",
  "Teknopark",
  "Merkezi Yemekhane",
  "Erkek KYK",
  "Kız KYK",
  "Villa Erkek",
  "Villa Kız",
  "Erkek AFAD Yemekhane",
  "Kız KYK Yemekhane",
]

// Define the categories array for reuse
const CATEGORIES = ["Aksesuar", "Giyim", "Kartlar", "Diğer"]

export default function CreatePostPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [postType, setPostType] = useState<"lost" | "found">("lost")
  const [imagePreview, setImagePreview] = useState<string | null>(null)
  const [category, setCategory] = useState<string>("")
  const [location, setLocation] = useState<string>("")

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      const reader = new FileReader()
      reader.onloadend = () => {
        setImagePreview(reader.result as string)
      }
      reader.readAsDataURL(file)
    }
  }

  return (
    <div className="flex min-h-screen flex-col">
      {/* Header */}
      <header className="sticky top-0 z-50 flex h-16 items-center justify-between border-b bg-[#B01E28] px-4 text-white md:px-6">
        <div className="flex items-center gap-2">
          <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden text-white">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-[240px] p-0">
              <div className="flex h-16 items-center border-b bg-[#B01E28] px-6">
                <div className="flex items-center gap-2 text-white">
                  <Image src="/placeholder.svg?height=32&width=32" width={32} height={32} alt="İYTEBul Logo" />
                  <span className="text-xl font-bold">İYTEBul</span>
                </div>
              </div>
              <nav className="grid gap-2 p-4">
                <Link
                  href="/home"
                  className="flex items-center gap-2 rounded-lg px-3 py-2 text-foreground transition-all hover:bg-accent"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <Home className="h-5 w-5" />
                  Ana Sayfa
                </Link>
                <Link
                  href="/messages"
                  className="flex items-center gap-2 rounded-lg px-3 py-2 text-foreground transition-all hover:bg-accent"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <Mail className="h-5 w-5" />
                  Mesajlar
                  <Badge className="ml-auto bg-[#B01E28]">3</Badge>
                </Link>
                <Link
                  href="/profile"
                  className="flex items-center gap-2 rounded-lg px-3 py-2 text-foreground transition-all hover:bg-accent"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <User className="h-5 w-5" />
                  Profil
                </Link>
                <Separator />
                <Link
                  href="#"
                  className="flex items-center gap-2 rounded-lg px-3 py-2 text-foreground transition-all hover:bg-accent"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <LogOut className="h-5 w-5" />
                  Çıkış Yap
                </Link>
              </nav>
            </SheetContent>
          </Sheet>
          <Link href="/home" className="flex items-center gap-2">
            <Image src="/placeholder.svg?height=32&width=32" width={32} height={32} alt="İYTEBul Logo" />
            <span className="text-xl font-bold hidden md:inline-block">İYTEBul</span>
          </Link>
        </div>
        <div className="flex items-center gap-2">
          <Avatar className="h-8 w-8 border-2 border-white">
            <AvatarImage src="/placeholder.svg?height=32&width=32" alt="@user" />
            <AvatarFallback>HU</AvatarFallback>
          </Avatar>
        </div>
      </header>

      {/* Main Content */}
      <div className="flex flex-1">
        {/* Sidebar - Desktop */}
        <aside className="hidden w-[240px] flex-col border-r bg-background md:flex">
          <nav className="grid gap-2 p-4">
            <Link
              href="/home"
              className="flex items-center gap-2 rounded-lg px-3 py-2 text-foreground transition-all hover:bg-accent"
            >
              <Home className="h-5 w-5" />
              Ana Sayfa
            </Link>
            <Link
              href="/messages"
              className="flex items-center gap-2 rounded-lg px-3 py-2 text-foreground transition-all hover:bg-accent"
            >
              <Mail className="h-5 w-5" />
              Mesajlar
              <Badge className="ml-auto bg-[#B01E28] text-white">3</Badge>
            </Link>
            <Link
              href="/profile"
              className="flex items-center gap-2 rounded-lg px-3 py-2 text-foreground transition-all hover:bg-accent"
            >
              <User className="h-5 w-5" />
              Profil
            </Link>
            <Separator className="my-2" />
            <Link
              href="#"
              className="flex items-center gap-2 rounded-lg px-3 py-2 text-foreground transition-all hover:bg-accent"
            >
              <LogOut className="h-5 w-5" />
              Çıkış Yap
            </Link>
          </nav>
        </aside>

        {/* Main Content */}
        <main className="flex-1 overflow-auto">
          <div className="container mx-auto p-4 md:p-6 max-w-2xl">
            <div className="mb-6">
              <h1 className="text-2xl font-bold">Yeni İlan Oluştur</h1>
              <p className="text-muted-foreground">Kayıp veya bulduğunuz eşyayı ilan edin</p>
            </div>

            <form className="space-y-6">
              <div className="space-y-2">
                <Label>İlan Türü</Label>
                <RadioGroup
                  defaultValue="lost"
                  className="flex flex-wrap gap-4"
                  onValueChange={(value) => setPostType(value as "lost" | "found")}
                >
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="lost" id="lost" />
                    <Label htmlFor="lost" className="cursor-pointer">
                      Kayıp Eşya
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="found" id="found" />
                    <Label htmlFor="found" className="cursor-pointer">
                      Bulunan Eşya
                    </Label>
                  </div>
                </RadioGroup>
              </div>

              <div className="space-y-2">
                <Label htmlFor="title">İlan Başlığı</Label>
                <Input
                  id="title"
                  placeholder={postType === "lost" ? "Kayıp Laptop Çantası" : "Bulunan Öğrenci Kartı"}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="category">Kategori</Label>
                <Select onValueChange={setCategory} value={category}>
                  <SelectTrigger>
                    <SelectValue placeholder="Kategori seçin" />
                  </SelectTrigger>
                  <SelectContent>
                    {CATEGORIES.map((cat) => (
                      <SelectItem key={cat} value={cat}>
                        {cat}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="location">Konum</Label>
                <Select onValueChange={setLocation} value={location}>
                  <SelectTrigger>
                    <SelectValue placeholder="Konum seçin" />
                  </SelectTrigger>
                  <SelectContent>
                    <div className="max-h-[300px] overflow-y-auto">
                      {LOCATIONS.map((loc) => (
                        <SelectItem key={loc} value={loc}>
                          {loc}
                        </SelectItem>
                      ))}
                    </div>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="description">Açıklama</Label>
                <Textarea
                  id="description"
                  placeholder={
                    postType === "lost"
                      ? "Eşyanızı nerede kaybettiğinizi, ne zaman kaybettiğinizi ve eşyanızın özelliklerini belirtin."
                      : "Eşyayı nerede bulduğunuzu, ne zaman bulduğunuzu ve eşyanın özelliklerini belirtin."
                  }
                  className="min-h-[120px]"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="image">Fotoğraf Ekle (İsteğe Bağlı)</Label>
                <div className="border-2 border-dashed rounded-lg p-4 text-center">
                  <input type="file" id="image" className="hidden" accept="image/*" onChange={handleImageChange} />
                  {imagePreview ? (
                    <div className="space-y-2">
                      <Image
                        src={imagePreview || "/placeholder.svg"}
                        alt="Preview"
                        width={300}
                        height={200}
                        className="mx-auto rounded-lg object-cover max-h-[200px]"
                      />
                      <Button type="button" variant="outline" onClick={() => setImagePreview(null)}>
                        Fotoğrafı Kaldır
                      </Button>
                    </div>
                  ) : (
                    <label htmlFor="image" className="cursor-pointer block p-4">
                      <Upload className="mx-auto h-8 w-8 text-muted-foreground mb-2" />
                      <p className="text-sm text-muted-foreground">Fotoğraf yüklemek için tıklayın veya sürükleyin</p>
                    </label>
                  )}
                </div>
              </div>

              <div className="flex gap-4 pt-4">
                <Button type="button" variant="outline" className="flex-1" asChild>
                  <Link href="/home">İptal</Link>
                </Button>
                <Button className="flex-1 bg-[#B01E28] hover:bg-[#8a1720]">İlanı Yayınla</Button>
              </div>
            </form>
          </div>
        </main>
      </div>
    </div>
  )
}

