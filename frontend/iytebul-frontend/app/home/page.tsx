"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import {
  Bell,
  Filter,
  Home,
  LogOut,
  Mail,
  Menu,
  Plus,
  Search,
  User,
  X,
  Calendar,
  LayoutGrid,
  LayoutList,
} from "lucide-react"
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Label } from "@/components/ui/label"

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

export default function HomePage() {
  const [activeTab, setActiveTab] = useState("all")
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [selectedCategories, setSelectedCategories] = useState<string[]>([])
  const [selectedLocations, setSelectedLocations] = useState<string[]>([])
  const [viewMode, setViewMode] = useState<"list" | "grid">("list")
  const [sortOrder, setSortOrder] = useState<"newest" | "oldest" | "custom">("newest")
  const [dateRange, setDateRange] = useState<{ start: string | null; end: string | null }>({ start: null, end: null })

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
                  href="#"
                  className="flex items-center gap-2 rounded-lg px-3 py-2 text-foreground transition-all hover:bg-accent"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <Home className="h-5 w-5" />
                  Ana Sayfa
                </Link>
                <Link
                  href="#"
                  className="flex items-center gap-2 rounded-lg px-3 py-2 text-foreground transition-all hover:bg-accent"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <Mail className="h-5 w-5" />
                  Mesajlar
                  <Badge className="ml-auto bg-[#B01E28]">3</Badge>
                </Link>
                <Link
                  href="#"
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
          <Link href="#" className="flex items-center gap-2">
            <Image src="/placeholder.svg?height=32&width=32" width={32} height={32} alt="İYTEBul Logo" />
            <span className="text-xl font-bold hidden md:inline-block">İYTEBul</span>
          </Link>
        </div>
        <div className="relative hidden md:flex md:flex-1 md:max-w-md lg:max-w-lg mx-4">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-white/70" />
          <Input
            type="search"
            placeholder="Kayıp eşya ara..."
            className="w-full bg-white/10 pl-8 text-white placeholder:text-white/70 focus:bg-white focus:text-foreground focus:placeholder:text-muted-foreground"
          />

          {/* Date Sort Dropdown */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon" className="absolute right-10 text-white">
                <Calendar className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-56">
              <DropdownMenuLabel>Tarihe Göre Sırala</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuCheckboxItem checked={sortOrder === "newest"} onCheckedChange={() => setSortOrder("newest")}>
                En yeniden en eskiye
              </DropdownMenuCheckboxItem>
              <DropdownMenuCheckboxItem checked={sortOrder === "oldest"} onCheckedChange={() => setSortOrder("oldest")}>
                En eskiden en yeniye
              </DropdownMenuCheckboxItem>
              <DropdownMenuSeparator />
              <DropdownMenuLabel>Tarih Aralığı</DropdownMenuLabel>
              <div className="p-2 space-y-2">
                <div className="space-y-1">
                  <Label htmlFor="start-date" className="text-xs">
                    Başlangıç
                  </Label>
                  <Input
                    id="start-date"
                    type="date"
                    className="h-8 text-xs"
                    value={dateRange.start || ""}
                    onChange={(e) => setDateRange({ ...dateRange, start: e.target.value })}
                  />
                </div>
                <div className="space-y-1">
                  <Label htmlFor="end-date" className="text-xs">
                    Bitiş
                  </Label>
                  <Input
                    id="end-date"
                    type="date"
                    className="h-8 text-xs"
                    value={dateRange.end || ""}
                    onChange={(e) => setDateRange({ ...dateRange, end: e.target.value })}
                  />
                </div>
                <Button
                  size="sm"
                  className="w-full mt-2 bg-[#B01E28] hover:bg-[#8a1720]"
                  onClick={() => {
                    if (dateRange.start && dateRange.end) {
                      setSortOrder("custom")
                    }
                  }}
                >
                  Uygula
                </Button>
              </div>
            </DropdownMenuContent>
          </DropdownMenu>

          {/* Filter Button */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon" className="absolute right-0 text-white">
                <Filter className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-56">
              <DropdownMenuLabel>Filtreler</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <div className="max-h-[300px] overflow-y-auto">
                <DropdownMenuLabel className="font-bold text-xs">Kategoriler</DropdownMenuLabel>
                {CATEGORIES.map((category) => (
                  <DropdownMenuCheckboxItem
                    key={category}
                    checked={selectedCategories.includes(category)}
                    onCheckedChange={(checked) => {
                      if (checked) {
                        setSelectedCategories([...selectedCategories, category])
                      } else {
                        setSelectedCategories(selectedCategories.filter((c) => c !== category))
                      }
                    }}
                  >
                    {category}
                  </DropdownMenuCheckboxItem>
                ))}
                <DropdownMenuSeparator />
                <DropdownMenuLabel className="font-bold text-xs">Konumlar</DropdownMenuLabel>
                {LOCATIONS.map((location) => (
                  <DropdownMenuCheckboxItem
                    key={location}
                    checked={selectedLocations.includes(location)}
                    onCheckedChange={(checked) => {
                      if (checked) {
                        setSelectedLocations([...selectedLocations, location])
                      } else {
                        setSelectedLocations(selectedLocations.filter((l) => l !== location))
                      }
                    }}
                  >
                    {location}
                  </DropdownMenuCheckboxItem>
                ))}
              </div>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="ghost" size="icon" className="text-white">
            <Bell className="h-5 w-5" />
          </Button>
          <Button variant="ghost" size="icon" className="text-white md:hidden">
            <Search className="h-5 w-5" />
          </Button>
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
              href="#"
              className="flex items-center gap-2 rounded-lg bg-accent px-3 py-2 text-accent-foreground transition-all"
            >
              <Home className="h-5 w-5" />
              Ana Sayfa
            </Link>
            <Link
              href="#"
              className="flex items-center gap-2 rounded-lg px-3 py-2 text-foreground transition-all hover:bg-accent"
            >
              <Mail className="h-5 w-5" />
              Mesajlar
              <Badge className="ml-auto bg-[#B01E28] text-white">3</Badge>
            </Link>
            <Link
              href="#"
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
          <div className="container mx-auto p-4 md:p-6 max-w-4xl">
            {/* Mobile Search */}
            <div className="relative mb-4 md:hidden">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input type="search" placeholder="Kayıp eşya ara..." className="w-full pl-8 pr-20" />

              {/* Date Sort Button - Mobile */}
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" size="icon" className="absolute right-10 top-0">
                    <Calendar className="h-4 w-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-56">
                  <DropdownMenuLabel>Tarihe Göre Sırala</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuCheckboxItem
                    checked={sortOrder === "newest"}
                    onCheckedChange={() => setSortOrder("newest")}
                  >
                    En yeniden en eskiye
                  </DropdownMenuCheckboxItem>
                  <DropdownMenuCheckboxItem
                    checked={sortOrder === "oldest"}
                    onCheckedChange={() => setSortOrder("oldest")}
                  >
                    En eskiden en yeniye
                  </DropdownMenuCheckboxItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuLabel>Tarih Aralığı</DropdownMenuLabel>
                  <div className="p-2 space-y-2">
                    <div className="space-y-1">
                      <Label htmlFor="mobile-start-date" className="text-xs">
                        Başlangıç
                      </Label>
                      <Input
                        id="mobile-start-date"
                        type="date"
                        className="h-8 text-xs"
                        value={dateRange.start || ""}
                        onChange={(e) => setDateRange({ ...dateRange, start: e.target.value })}
                      />
                    </div>
                    <div className="space-y-1">
                      <Label htmlFor="mobile-end-date" className="text-xs">
                        Bitiş
                      </Label>
                      <Input
                        id="mobile-end-date"
                        type="date"
                        className="h-8 text-xs"
                        value={dateRange.end || ""}
                        onChange={(e) => setDateRange({ ...dateRange, end: e.target.value })}
                      />
                    </div>
                    <Button
                      size="sm"
                      className="w-full mt-2 bg-[#B01E28] hover:bg-[#8a1720]"
                      onClick={() => {
                        if (dateRange.start && dateRange.end) {
                          setSortOrder("custom")
                        }
                      }}
                    >
                      Uygula
                    </Button>
                  </div>
                </DropdownMenuContent>
              </DropdownMenu>

              {/* Filter Button - Mobile */}
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" size="icon" className="absolute right-0 top-0">
                    <Filter className="h-4 w-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-56">
                  <DropdownMenuLabel>Filtreler</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <div className="max-h-[300px] overflow-y-auto">
                    <DropdownMenuLabel className="font-bold text-xs">Kategoriler</DropdownMenuLabel>
                    {CATEGORIES.map((category) => (
                      <DropdownMenuCheckboxItem
                        key={category}
                        checked={selectedCategories.includes(category)}
                        onCheckedChange={(checked) => {
                          if (checked) {
                            setSelectedCategories([...selectedCategories, category])
                          } else {
                            setSelectedCategories(selectedCategories.filter((c) => c !== category))
                          }
                        }}
                      >
                        {category}
                      </DropdownMenuCheckboxItem>
                    ))}
                    <DropdownMenuSeparator />
                    <DropdownMenuLabel className="font-bold text-xs">Konumlar</DropdownMenuLabel>
                    {LOCATIONS.map((location) => (
                      <DropdownMenuCheckboxItem
                        key={location}
                        checked={selectedLocations.includes(location)}
                        onCheckedChange={(checked) => {
                          if (checked) {
                            setSelectedLocations([...selectedLocations, location])
                          } else {
                            setSelectedLocations(selectedLocations.filter((l) => l !== location))
                          }
                        }}
                      >
                        {location}
                      </DropdownMenuCheckboxItem>
                    ))}
                  </div>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>

            {/* Active Filters */}
            {(selectedCategories.length > 0 || selectedLocations.length > 0) && (
              <div className="flex flex-wrap gap-2 mb-4">
                {selectedCategories.map((category) => (
                  <Badge key={category} variant="secondary" className="flex items-center gap-1">
                    {category}
                    <Button
                      variant="ghost"
                      size="icon"
                      className="h-4 w-4 p-0 ml-1"
                      onClick={() => setSelectedCategories(selectedCategories.filter((c) => c !== category))}
                    >
                      <X className="h-3 w-3" />
                      <span className="sr-only">Remove {category}</span>
                    </Button>
                  </Badge>
                ))}
                {selectedLocations.map((location) => (
                  <Badge key={location} variant="outline" className="flex items-center gap-1">
                    {location}
                    <Button
                      variant="ghost"
                      size="icon"
                      className="h-4 w-4 p-0 ml-1"
                      onClick={() => setSelectedLocations(selectedLocations.filter((l) => l !== location))}
                    >
                      <X className="h-3 w-3" />
                      <span className="sr-only">Remove {location}</span>
                    </Button>
                  </Badge>
                ))}
                <Button
                  variant="ghost"
                  size="sm"
                  className="h-6 text-xs"
                  onClick={() => {
                    setSelectedCategories([])
                    setSelectedLocations([])
                  }}
                >
                  Temizle
                </Button>
              </div>
            )}
            {sortOrder !== "newest" && (
              <div className="mb-4 flex items-center text-sm text-muted-foreground">
                <Calendar className="h-4 w-4 mr-1" />
                <span>
                  {sortOrder === "oldest"
                    ? "En eskiden en yeniye sıralanıyor"
                    : dateRange.start && dateRange.end
                      ? `${dateRange.start} - ${dateRange.end} tarihleri arası`
                      : "Özel tarih aralığı"}
                </span>
                <Button
                  variant="ghost"
                  size="sm"
                  className="h-6 ml-2 p-0"
                  onClick={() => {
                    setSortOrder("newest")
                    setDateRange({ start: null, end: null })
                  }}
                >
                  <X className="h-3 w-3" />
                </Button>
              </div>
            )}

            {/* Tabs and New Post Button */}
            <div className="flex items-center justify-between mb-6">
              <Tabs defaultValue="all" className="w-full" onValueChange={setActiveTab}>
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <TabsList>
                      <TabsTrigger value="all">Tümü</TabsTrigger>
                      <TabsTrigger value="lost">Kayıp</TabsTrigger>
                      <TabsTrigger value="found">Bulunan</TabsTrigger>
                    </TabsList>

                    {/* View Mode Toggle */}
                    <div className="ml-4 flex items-center border rounded-md">
                      <Button
                        variant={viewMode === "list" ? "default" : "ghost"}
                        size="sm"
                        className={`px-2 rounded-r-none ${viewMode === "list" ? "bg-[#B01E28] hover:bg-[#8a1720]" : ""}`}
                        onClick={() => setViewMode("list")}
                      >
                        <LayoutList className="h-4 w-4" />
                      </Button>
                      <Button
                        variant={viewMode === "grid" ? "default" : "ghost"}
                        size="sm"
                        className={`px-2 rounded-l-none ${viewMode === "grid" ? "bg-[#B01E28] hover:bg-[#8a1720]" : ""}`}
                        onClick={() => setViewMode("grid")}
                      >
                        <LayoutGrid className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>

                  <Button className="bg-[#B01E28] hover:bg-[#8a1720]" asChild>
                    <Link href="/create-post">
                      <Plus className="h-4 w-4 mr-2" />
                      Yeni İlan
                    </Link>
                  </Button>
                </div>

                {/* Modify each TabsContent to support grid view */}
                <TabsContent value="all" className="mt-4">
                  <div className={viewMode === "grid" ? "grid grid-cols-1 md:grid-cols-2 gap-4" : "space-y-4"}>
                    {/* Lost Item Post */}
                    <PostCard
                      type="lost"
                      title="Kayıp Laptop Çantası"
                      description="Dün akşam kütüphanede siyah bir laptop çantası kaybettim. İçinde Dell XPS 13 laptop ve ders notlarım vardı. Bulan kişi lütfen iletişime geçsin."
                      location="Kütüphane"
                      date="2 saat önce"
                      user="Ahmet Yılmaz"
                      hasImage={true}
                      category="Aksesuar"
                    />

                    {/* Found Item Post */}
                    <PostCard
                      type="found"
                      title="Bulunan Öğrenci Kartı"
                      description="Yemekhane önünde bir öğrenci kartı buldum. Sahibi mesaj atabilir."
                      location="Merkezi Yemekhane"
                      date="5 saat önce"
                      user="Ayşe Demir"
                      hasImage={true}
                      category="Kartlar"
                    />

                    {/* Lost Item Post - No Image */}
                    <PostCard
                      type="lost"
                      title="Kayıp Anahtarlık"
                      description="Mühendislik Fakültesi'nde anahtarlığımı kaybettim. Üzerinde mavi bir yunus figürü var. Bulan olursa lütfen iletişime geçin."
                      location="Makine Mühendisliği"
                      date="1 gün önce"
                      user="Mehmet Kaya"
                      hasImage={false}
                      category="Aksesuar"
                    />
                  </div>
                </TabsContent>

                <TabsContent value="lost" className="mt-4">
                  <div className={viewMode === "grid" ? "grid grid-cols-1 md:grid-cols-2 gap-4" : "space-y-4"}>
                    <PostCard
                      type="lost"
                      title="Kayıp Laptop Çantası"
                      description="Dün akşam kütüphanede siyah bir laptop çantası kaybettim. İçinde Dell XPS 13 laptop ve ders notlarım vardı. Bulan kişi lütfen iletişime geçsin."
                      location="Kütüphane"
                      date="2 saat önce"
                      user="Ahmet Yılmaz"
                      hasImage={true}
                      category="Aksesuar"
                    />

                    <PostCard
                      type="lost"
                      title="Kayıp Anahtarlık"
                      description="Mühendislik Fakültesi'nde anahtarlığımı kaybettim. Üzerinde mavi bir yunus figürü var. Bulan olursa lütfen iletişime geçin."
                      location="Makine Mühendisliği"
                      date="1 gün önce"
                      user="Mehmet Kaya"
                      hasImage={false}
                      category="Aksesuar"
                    />
                  </div>
                </TabsContent>

                <TabsContent value="found" className="mt-4">
                  <div className={viewMode === "grid" ? "grid grid-cols-1 md:grid-cols-2 gap-4" : "space-y-4"}>
                    <PostCard
                      type="found"
                      title="Bulunan Öğrenci Kartı"
                      description="Yemekhane önünde bir öğrenci kartı buldum. Sahibi mesaj atabilir."
                      location="Merkezi Yemekhane"
                      date="5 saat önce"
                      user="Ayşe Demir"
                      hasImage={true}
                      category="Kartlar"
                    />
                  </div>
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </main>

        {/* Messages Sidebar - Desktop Only */}
        <aside className="hidden w-[300px] flex-col border-l bg-background lg:flex">
          <div className="p-4 border-b">
            <h2 className="text-lg font-semibold">Mesajlar</h2>
          </div>
          <div className="flex-1 overflow-auto">
            <MessagePreview
              name="Ahmet Yılmaz"
              message="Merhaba, laptop çantanızı buldum. Nerede buluşabiliriz?"
              time="10 dk önce"
              unread={true}
            />
            <MessagePreview
              name="Zeynep Kaya"
              message="Teşekkürler, yarın kampüste olacağım."
              time="2 saat önce"
              unread={true}
            />
            <MessagePreview
              name="Mehmet Demir"
              message="Anahtarlığı teslim aldım, çok teşekkürler!"
              time="Dün"
              unread={false}
            />
          </div>
        </aside>
      </div>
    </div>
  )
}

// Post Card Component
function PostCard({
  type,
  title,
  description,
  location,
  date,
  user,
  hasImage,
  category,
}: {
  type: "lost" | "found"
  title: string
  description: string
  location: string
  date: string
  user: string
  hasImage: boolean
  category?: string
}) {
  const [messageOpen, setMessageOpen] = useState(false)

  return (
    <Card>
      <CardHeader className="pb-2">
        <div className="flex justify-between items-start">
          <div className="flex items-center gap-2">
            <Avatar className="h-8 w-8">
              <AvatarImage src="/placeholder.svg?height=32&width=32" alt={user} />
              <AvatarFallback>
                {user
                  .split(" ")
                  .map((n) => n[0])
                  .join("")}
              </AvatarFallback>
            </Avatar>
            <div>
              <div className="font-semibold">{user}</div>
              <div className="text-xs text-muted-foreground">{date}</div>
            </div>
          </div>
          <Badge className={type === "lost" ? "bg-orange-500" : "bg-green-500"}>
            {type === "lost" ? "Kayıp" : "Bulundu"}
          </Badge>
        </div>
      </CardHeader>
      <CardContent className="pb-2">
        <CardTitle className="text-lg mb-1">{title}</CardTitle>
        <div className="flex flex-wrap gap-2 mb-2">
          <CardDescription className="text-sm">
            <span className="font-medium">Konum:</span> {location}
          </CardDescription>
          {category && (
            <Badge variant="outline" className="text-xs">
              {category}
            </Badge>
          )}
        </div>
        <p className="text-sm">{description}</p>
        {hasImage && (
          <div className="mt-3">
            <Image
              src="/placeholder.svg?height=300&width=500"
              height={300}
              width={500}
              alt="İlan görseli"
              className="rounded-md w-full object-cover max-h-[300px]"
            />
          </div>
        )}
      </CardContent>
      <CardFooter>
        <div className="w-full">
          {messageOpen ? (
            <div className="space-y-2">
              <Input placeholder="Mesajınızı yazın..." />
              <div className="flex gap-2">
                <Button className="bg-[#B01E28] hover:bg-[#8a1720] flex-1">Gönder</Button>
                <Button variant="outline" onClick={() => setMessageOpen(false)}>
                  İptal
                </Button>
              </div>
            </div>
          ) : (
            <Button variant="outline" className="w-full" onClick={() => setMessageOpen(true)}>
              <Mail className="h-4 w-4 mr-2" />
              İletişime Geç
            </Button>
          )}
        </div>
      </CardFooter>
    </Card>
  )
}

// Message Preview Component
function MessagePreview({
  name,
  message,
  time,
  unread,
}: { name: string; message: string; time: string; unread: boolean }) {
  return (
    <div className={`p-3 border-b hover:bg-accent/50 cursor-pointer ${unread ? "bg-accent/20" : ""}`}>
      <div className="flex gap-2">
        <Avatar className="h-10 w-10">
          <AvatarImage src="/placeholder.svg?height=40&width=40" alt={name} />
          <AvatarFallback>
            {name
              .split(" ")
              .map((n) => n[0])
              .join("")}
          </AvatarFallback>
        </Avatar>
        <div className="flex-1 overflow-hidden">
          <div className="flex justify-between items-center">
            <div className="font-medium truncate">{name}</div>
            <div className="text-xs text-muted-foreground whitespace-nowrap">{time}</div>
          </div>
          <div className="text-sm truncate">
            {unread && <span className="inline-block h-2 w-2 rounded-full bg-[#B01E28] mr-1"></span>}
            {message}
          </div>
        </div>
      </div>
    </div>
  )
}

