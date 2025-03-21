"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Home, LogOut, Mail, Menu, User, Edit, MapPin, Calendar, Phone, AtSign } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Separator } from "@/components/ui/separator"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

export default function ProfilePage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

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
                  className="flex items-center gap-2 rounded-lg bg-accent px-3 py-2 text-accent-foreground"
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
              className="flex items-center gap-2 rounded-lg bg-accent px-3 py-2 text-accent-foreground"
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
            <div className="mb-8">
              <div className="relative">
                <div className="h-32 w-full bg-gradient-to-r from-[#B01E28] to-[#8a1720] rounded-t-lg"></div>
                <div className="absolute -bottom-16 left-4 md:left-8">
                  <Avatar className="h-32 w-32 border-4 border-background">
                    <AvatarImage src="/placeholder.svg?height=128&width=128" alt="Hüseyin Uysal" />
                    <AvatarFallback className="text-4xl">HU</AvatarFallback>
                  </Avatar>
                </div>
                <div className="absolute bottom-4 right-4">
                  <Button variant="outline" className="bg-background">
                    <Edit className="h-4 w-4 mr-2" />
                    Profili Düzenle
                  </Button>
                </div>
              </div>
              <div className="mt-20 md:ml-40">
                <h1 className="text-2xl font-bold">Hüseyin Uysal</h1>
                <p className="text-muted-foreground">Bilgisayar Mühendisliği Öğrencisi</p>
                <div className="flex flex-wrap gap-4 mt-2">
                  <div className="flex items-center text-sm text-muted-foreground">
                    <MapPin className="h-4 w-4 mr-1" />
                    İzmir, Türkiye
                  </div>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Calendar className="h-4 w-4 mr-1" />
                    Üyelik: Eylül 2023
                  </div>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Phone className="h-4 w-4 mr-1" />
                    +90 555 123 4567
                  </div>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <AtSign className="h-4 w-4 mr-1" />
                    huseyinuysal@std.iyte.edu.tr
                  </div>
                </div>
              </div>
            </div>

            <Tabs defaultValue="posts" className="mt-8">
              <TabsList className="mb-4">
                <TabsTrigger value="posts">İlanlarım</TabsTrigger>
                <TabsTrigger value="activity">Aktivitelerim</TabsTrigger>
                <TabsTrigger value="settings">Ayarlar</TabsTrigger>
              </TabsList>

              <TabsContent value="posts" className="space-y-4">
                <Card>
                  <CardHeader className="pb-2">
                    <div className="flex justify-between items-start">
                      <div className="flex items-center gap-2">
                        <Avatar className="h-8 w-8">
                          <AvatarImage src="/placeholder.svg?height=32&width=32" alt="Hüseyin Uysal" />
                          <AvatarFallback>HU</AvatarFallback>
                        </Avatar>
                        <div>
                          <div className="font-semibold">Hüseyin Uysal</div>
                          <div className="text-xs text-muted-foreground">2 gün önce</div>
                        </div>
                      </div>
                      <Badge className="bg-orange-500">Kayıp</Badge>
                    </div>
                  </CardHeader>
                  <CardContent className="pb-2">
                    <CardTitle className="text-lg mb-1">Kayıp Laptop Çantası</CardTitle>
                    <CardDescription className="text-sm mb-2">
                      <span className="font-medium">Konum:</span> Kütüphane
                    </CardDescription>
                    <p className="text-sm">
                      Dün akşam kütüphanede siyah bir laptop çantası kaybettim. İçinde Dell XPS 13 laptop ve ders
                      notlarım vardı. Bulan kişi lütfen iletişime geçsin.
                    </p>
                    <div className="mt-3">
                      <Image
                        src="/placeholder.svg?height=300&width=500"
                        height={300}
                        width={500}
                        alt="İlan görseli"
                        className="rounded-md w-full object-cover max-h-[300px]"
                      />
                    </div>
                  </CardContent>
                  <CardFooter>
                    <div className="flex gap-2 w-full">
                      <Button variant="outline" className="flex-1">
                        Düzenle
                      </Button>
                      <Button variant="destructive" className="flex-1">
                        Sil
                      </Button>
                    </div>
                  </CardFooter>
                </Card>

                <Card>
                  <CardHeader className="pb-2">
                    <div className="flex justify-between items-start">
                      <div className="flex items-center gap-2">
                        <Avatar className="h-8 w-8">
                          <AvatarImage src="/placeholder.svg?height=32&width=32" alt="Hüseyin Uysal" />
                          <AvatarFallback>HU</AvatarFallback>
                        </Avatar>
                        <div>
                          <div className="font-semibold">Hüseyin Uysal</div>
                          <div className="text-xs text-muted-foreground">1 hafta önce</div>
                        </div>
                      </div>
                      <Badge className="bg-green-500">Bulundu</Badge>
                    </div>
                  </CardHeader>
                  <CardContent className="pb-2">
                    <CardTitle className="text-lg mb-1">Bulunan Öğrenci Kartı</CardTitle>
                    <CardDescription className="text-sm mb-2">
                      <span className="font-medium">Konum:</span> Yemekhane
                    </CardDescription>
                    <p className="text-sm">Yemekhane önünde bir öğrenci kartı buldum. Sahibi mesaj atabilir.</p>
                    <div className="mt-3">
                      <Image
                        src="/placeholder.svg?height=300&width=500"
                        height={300}
                        width={500}
                        alt="İlan görseli"
                        className="rounded-md w-full object-cover max-h-[300px]"
                      />
                    </div>
                  </CardContent>
                  <CardFooter>
                    <div className="flex gap-2 w-full">
                      <Button variant="outline" className="flex-1">
                        Düzenle
                      </Button>
                      <Button variant="destructive" className="flex-1">
                        Sil
                      </Button>
                    </div>
                  </CardFooter>
                </Card>
              </TabsContent>

              <TabsContent value="activity" className="space-y-4">
                <Card>
                  <CardHeader>
                    <CardTitle>Aktivite Geçmişi</CardTitle>
                    <CardDescription>Son 30 gün içindeki aktiviteleriniz</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex items-start gap-4">
                        <div className="min-w-[4rem] text-center">
                          <div className="text-xs text-muted-foreground">Bugün</div>
                          <div className="font-medium">14:30</div>
                        </div>
                        <div className="flex-1 bg-accent/50 p-3 rounded-lg">
                          <p className="font-medium">Ahmet Yılmaz ile mesajlaştınız</p>
                          <p className="text-sm text-muted-foreground">Kayıp laptop çantası hakkında</p>
                        </div>
                      </div>

                      <div className="flex items-start gap-4">
                        <div className="min-w-[4rem] text-center">
                          <div className="text-xs text-muted-foreground">Dün</div>
                          <div className="font-medium">09:15</div>
                        </div>
                        <div className="flex-1 bg-accent/50 p-3 rounded-lg">
                          <p className="font-medium">Yeni bir ilan oluşturdunuz</p>
                          <p className="text-sm text-muted-foreground">Kayıp Laptop Çantası</p>
                        </div>
                      </div>

                      <div className="flex items-start gap-4">
                        <div className="min-w-[4rem] text-center">
                          <div className="text-xs text-muted-foreground">5 Gün Önce</div>
                          <div className="font-medium">16:45</div>
                        </div>
                        <div className="flex-1 bg-accent/50 p-3 rounded-lg">
                          <p className="font-medium">Mehmet Demir ile mesajlaştınız</p>
                          <p className="text-sm text-muted-foreground">Bulunan anahtarlık hakkında</p>
                        </div>
                      </div>

                      <div className="flex items-start gap-4">
                        <div className="min-w-[4rem] text-center">
                          <div className="text-xs text-muted-foreground">1 Hafta Önce</div>
                          <div className="font-medium">11:20</div>
                        </div>
                        <div className="flex-1 bg-accent/50 p-3 rounded-lg">
                          <p className="font-medium">Yeni bir ilan oluşturdunuz</p>
                          <p className="text-sm text-muted-foreground">Bulunan Öğrenci Kartı</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="settings" className="space-y-4">
                <Card>
                  <CardHeader>
                    <CardTitle>Profil Ayarları</CardTitle>
                    <CardDescription>Kişisel bilgilerinizi güncelleyin</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <form className="space-y-4">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <label htmlFor="name" className="text-sm font-medium">
                            Ad Soyad
                          </label>
                          <input
                            id="name"
                            type="text"
                            className="w-full p-2 border rounded-md"
                            defaultValue="Hüseyin Uysal"
                          />
                        </div>
                        <div className="space-y-2">
                          <label htmlFor="email" className="text-sm font-medium">
                            E-posta
                          </label>
                          <input
                            id="email"
                            type="email"
                            className="w-full p-2 border rounded-md"
                            defaultValue="huseyinuysal@std.iyte.edu.tr"
                            disabled
                          />
                        </div>
                        <div className="space-y-2">
                          <label htmlFor="phone" className="text-sm font-medium">
                            Telefon
                          </label>
                          <input
                            id="phone"
                            type="tel"
                            className="w-full p-2 border rounded-md"
                            defaultValue="+90 555 123 4567"
                          />
                        </div>
                        <div className="space-y-2">
                          <label htmlFor="department" className="text-sm font-medium">
                            Bölüm
                          </label>
                          <input
                            id="department"
                            type="text"
                            className="w-full p-2 border rounded-md"
                            defaultValue="Bilgisayar Mühendisliği"
                          />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="bio" className="text-sm font-medium">
                          Hakkımda
                        </label>
                        <textarea
                          id="bio"
                          className="w-full p-2 border rounded-md h-24"
                          defaultValue="İYTE Bilgisayar Mühendisliği 3. sınıf öğrencisiyim."
                        ></textarea>
                      </div>
                      <div className="flex justify-end">
                        <Button className="bg-[#B01E28] hover:bg-[#8a1720]">Kaydet</Button>
                      </div>
                    </form>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Bildirim Ayarları</CardTitle>
                    <CardDescription>Bildirim tercihlerinizi yönetin</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="font-medium">Yeni Mesaj Bildirimleri</p>
                          <p className="text-sm text-muted-foreground">Yeni mesaj aldığınızda bildirim alın</p>
                        </div>
                        <label className="relative inline-flex items-center cursor-pointer">
                          <input type="checkbox" className="sr-only peer" defaultChecked />
                          <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#B01E28]"></div>
                        </label>
                      </div>
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="font-medium">İlan Yanıtları</p>
                          <p className="text-sm text-muted-foreground">İlanlarınıza yanıt geldiğinde bildirim alın</p>
                        </div>
                        <label className="relative inline-flex items-center cursor-pointer">
                          <input type="checkbox" className="sr-only peer" defaultChecked />
                          <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#B01E28]"></div>
                        </label>
                      </div>
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="font-medium">E-posta Bildirimleri</p>
                          <p className="text-sm text-muted-foreground">Önemli güncellemeler için e-posta alın</p>
                        </div>
                        <label className="relative inline-flex items-center cursor-pointer">
                          <input type="checkbox" className="sr-only peer" />
                          <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#B01E28]"></div>
                        </label>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </main>
      </div>
    </div>
  )
}

