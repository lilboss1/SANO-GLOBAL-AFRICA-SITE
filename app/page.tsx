"use client"

import type React from "react"
import { useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import {
  Mail,
  MapPin,
  MessageCircle,
  Globe,
  Plane,
  Building,
  Package,
  Truck,
  Users,
  CheckCircle,
  Award,
  Shield,
} from "lucide-react"

export default function SanoGlobalWebsite() {
  const [language, setLanguage] = useState<"fr" | "en">("fr")
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  const content = {
    fr: {
      nav: {
        home: "Accueil",
        about: "À propos",
        products: "Nos produits",
        services: "Nos services",
        engagements: "Nos engagements",
        contact: "Contact",
      },
      hero: {
        title: "SANO GLOBAL",
        subtitle: "Votre passerelle entre la Malaisie et l'Afrique pour une alimentation de qualité",
        cta: "Nous contacter",
      },
      about: {
        title: "À propos de SANO GLOBAL",
        subtitle: "Notre Histoire",
        description:
          "SANO GLOBAL est une entreprise spécialisée dans l'exportation de produits alimentaires depuis la Malaisie vers l'Afrique. Nous travaillons avec des fournisseurs certifiés et garantissons la qualité, la traçabilité, et le respect des normes internationales.",
        mission: "Notre Mission",
        missionText:
          "Offrir des produits alimentaires sûrs, de qualité, tout en construisant des partenariats durables avec des distributeurs, commerçants et supermarchés africains.",
        ceo: "PDG - Sanogo Abdoul Hamid",
        values: {
          quality: "Qualité",
          trust: "Confiance",
          partnership: "Partenariat",
        },
      },
      products: {
        title: "Nos Produits",
        subtitle: "Une gamme complète de produits alimentaires de qualité",
        categories: {
          oils: {
            title: "Huiles Alimentaires",
            description: "Huiles de cuisson de première qualité, certifiées Halal",
          },
          rice: {
            title: "Riz et Céréales",
            description: "Riz premium et céréales nutritives pour tous vos besoins",
          },
          canned: {
            title: "Produits en Conserve",
            description: "Conserves de qualité avec une longue durée de conservation",
          },
          spices: {
            title: "Épices et Condiments",
            description: "Épices authentiques et condiments savoureux",
          },
        },
        certifications: "Certifications : Halal, ISO, HACCP",
      },
      services: {
        title: "Nos Services",
        subtitle: "Solutions complètes pour vos besoins commerciaux",
        list: {
          visa: {
            title: "Visa pour la Malaisie",
            description:
              "Assistance complète pour l'obtention de visas touristiques et professionnels vers la Malaisie.",
          },
          travel: {
            title: "Organisation de Voyages d'Affaires",
            description:
              "Planification de voyages professionnels : vols, hébergements, rendez-vous d'affaires et visites d'usines.",
          },
          fairs: {
            title: "Participation aux Foires Commerciales en Malaisie",
            description:
              "Inscription, accompagnement et représentation lors de salons internationaux pour explorer de nouveaux fournisseurs.",
          },
          import: {
            title: "Importation de Produits Asiatiques",
            description:
              "Sélection, négociation, achat et importation depuis la Malaisie, la Chine et autres pays d'Asie.",
          },
          logistics: {
            title: "Logistique Internationale et Transport",
            description:
              "Coordination du transport maritime et aérien, suivi des cargaisons, dédouanement rapide au Burkina Faso.",
          },
          suppliers: {
            title: "Recherche de Fournisseurs Fiables",
            description:
              "Mise en relation avec des fabricants certifiés en Asie selon les besoins spécifiques du client.",
          },
        },
      },
      engagements: {
        title: "Nos Engagements",
        subtitle: "Les valeurs qui nous guident",
        list: {
          quality: {
            title: "Engagement Qualité",
            description:
              "Nous garantissons des produits certifiés Halal, ISO et HACCP, respectant les plus hautes normes internationales.",
          },
          transparency: {
            title: "Transparence Totale",
            description:
              "Traçabilité complète de nos produits, de la source jusqu'à la livraison chez nos clients africains.",
          },
          partnership: {
            title: "Partenariat Durable",
            description: "Nous construisons des relations à long terme basées sur la confiance mutuelle et le respect.",
          },
          innovation: {
            title: "Innovation Continue",
            description: "Nous adoptons les dernières technologies pour optimiser nos processus d'exportation.",
          },
          responsibility: {
            title: "Responsabilité Sociale",
            description: "Nous contribuons au développement économique de l'Afrique par nos activités commerciales.",
          },
          excellence: {
            title: "Excellence Opérationnelle",
            description:
              "Nous visons l'excellence dans chaque aspect de notre service, de la sélection à la livraison.",
          },
        },
      },
      contact: {
        title: "Contact",
        subtitle: "Contactez-nous pour vos besoins en produits alimentaires",
        form: {
          name: "Nom complet",
          email: "Email",
          message: "Message",
          send: "Envoyer le message",
        },
        info: {
          email: "Email",
          whatsapp: "WhatsApp",
          representative: "Représentant Burkina Faso",
          repName: "Mr Coulibaly Amadou",
        },
      },
      footer: {
        rights: "© 2025 SANO GLOBAL – Tous droits réservés",
        privacy: "Politique de confidentialité",
      },
    },
    en: {
      nav: {
        home: "Home",
        about: "About",
        products: "Our products",
        services: "Our services",
        engagements: "Our commitments",
        contact: "Contact",
      },
      hero: {
        title: "SANO GLOBAL",
        subtitle: "Your gateway between Malaysia and Africa for quality food",
        cta: "Contact us",
      },
      about: {
        title: "About SANO GLOBAL",
        subtitle: "Our Story",
        description:
          "SANO GLOBAL is a company specialized in exporting food products from Malaysia to Africa. We work with certified suppliers and guarantee quality, traceability, and compliance with international standards.",
        mission: "Our Mission",
        missionText:
          "To provide safe, quality food products while building lasting partnerships with distributors, traders and supermarkets in Africa.",
        ceo: "CEO - Sanogo Abdoul Hamid",
        values: {
          quality: "Quality",
          trust: "Trust",
          partnership: "Partnership",
        },
      },
      products: {
        title: "Our Products",
        subtitle: "A complete range of quality food products",
        categories: {
          oils: {
            title: "Cooking Oils",
            description: "Premium quality cooking oils, Halal certified",
          },
          rice: {
            title: "Rice and Cereals",
            description: "Premium rice and nutritious cereals for all your needs",
          },
          canned: {
            title: "Canned Products",
            description: "Quality canned goods with long shelf life",
          },
          spices: {
            title: "Spices and Condiments",
            description: "Authentic spices and flavorful condiments",
          },
        },
        certifications: "Certifications: Halal, ISO, HACCP",
      },
      services: {
        title: "Our Services",
        subtitle: "Complete solutions for your business needs",
        list: {
          visa: {
            title: "Malaysia Visa",
            description: "Complete assistance for obtaining tourist and business visas to Malaysia.",
          },
          travel: {
            title: "Business Travel Organization",
            description: "Professional travel planning: flights, accommodation, business meetings and factory visits.",
          },
          fairs: {
            title: "Participation in Trade Fairs in Malaysia",
            description:
              "Registration, support and representation at international exhibitions to explore new suppliers.",
          },
          import: {
            title: "Asian Product Import",
            description: "Selection, negotiation, purchase and import from Malaysia, China and other Asian countries.",
          },
          logistics: {
            title: "International Logistics and Transport",
            description:
              "Coordination of sea and air transport, cargo tracking, fast customs clearance in Burkina Faso.",
          },
          suppliers: {
            title: "Reliable Supplier Search",
            description: "Connection with certified manufacturers in Asia according to specific client needs.",
          },
        },
      },
      engagements: {
        title: "Our Commitments",
        subtitle: "The values that guide us",
        list: {
          quality: {
            title: "Quality Commitment",
            description:
              "We guarantee Halal, ISO and HACCP certified products, respecting the highest international standards.",
          },
          transparency: {
            title: "Total Transparency",
            description: "Complete traceability of our products, from the source to delivery to our African customers.",
          },
          partnership: {
            title: "Sustainable Partnership",
            description: "We build long-term relationships based on mutual trust and respect.",
          },
          innovation: {
            title: "Continuous Innovation",
            description: "We adopt the latest technologies to optimize our export processes.",
          },
          responsibility: {
            title: "Social Responsibility",
            description: "We contribute to the economic development of Africa through our business activities.",
          },
          excellence: {
            title: "Operational Excellence",
            description: "We strive for excellence in every aspect of our service, from selection to delivery.",
          },
        },
      },
      contact: {
        title: "Contact",
        subtitle: "Contact us for your food product needs",
        form: {
          name: "Full name",
          email: "Email",
          message: "Message",
          send: "Send message",
        },
        info: {
          email: "Email",
          whatsapp: "WhatsApp",
          representative: "Burkina Faso Representative",
          repName: "Mr Coulibali Amadou",
        },
      },
      footer: {
        rights: "© 2025 SANO GLOBAL – All rights reserved",
        privacy: "Privacy Policy",
      },
    },
  }

  const t = content[language]

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    // Créer le lien mailto
    const subject = encodeURIComponent("Nouveau message depuis le site SANO GLOBAL")
    const body = encodeURIComponent(`
Nom: ${formData.name}
Email: ${formData.email}

Message:
${formData.message}
    `)

    window.location.href = `mailto:sanoglobal@yahoo.com?subject=${subject}&body=${body}`

    // Réinitialiser le formulaire
    setFormData({ name: "", email: "", message: "" })
  }

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-slate-800/95 backdrop-blur-sm z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="bg-white p-1 rounded-sm">
                <Image src="/images/logo.jpg" alt="SANO GLOBAL Logo" width={32} height={32} className="rounded-sm" />
              </div>
              <span className="text-xl font-bold text-white">SANO GLOBAL</span>
            </div>

            <div className="hidden md:flex items-center space-x-8">
              <button
                onClick={() => scrollToSection("home")}
                className="text-white hover:text-blue-300 transition-colors text-sm"
              >
                {t.nav.home}
              </button>
              <button
                onClick={() => scrollToSection("about")}
                className="text-white hover:text-blue-300 transition-colors text-sm"
              >
                {t.nav.about}
              </button>
              <button
                onClick={() => scrollToSection("products")}
                className="text-white hover:text-blue-300 transition-colors text-sm"
              >
                {t.nav.products}
              </button>
              <button
                onClick={() => scrollToSection("services")}
                className="text-white hover:text-blue-300 transition-colors text-sm"
              >
                {t.nav.services}
              </button>
              <button
                onClick={() => scrollToSection("engagements")}
                className="text-white hover:text-blue-300 transition-colors text-sm"
              >
                {t.nav.engagements}
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="text-white hover:text-blue-300 transition-colors text-sm"
              >
                {t.nav.contact}
              </button>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setLanguage(language === "fr" ? "en" : "fr")}
                className="text-white hover:bg-white/10"
              >
                <Globe className="w-4 h-4 mr-1" />
                {language === "fr" ? "EN" : "FR"}
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section - Reproduction exacte du design de référence */}
      <section id="home" className="relative h-screen flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <Image src="/images/malaysia-bg.jpg" alt="Malaysia Background" fill className="object-cover" priority />
          <div className="absolute inset-0 bg-blue-900/40"></div>
        </div>

        <div className="relative z-10 text-center text-white px-4 max-w-5xl mx-auto">
          {/* Logo dans un carré blanc exactement comme sur l'image */}
          <div className="mb-8">
            <div className="bg-white p-4 rounded-xl shadow-2xl inline-block">
              <Image src="/images/logo.jpg" alt="SANO GLOBAL Logo" width={80} height={80} className="rounded-lg" />
            </div>
          </div>

          {/* Titre principal exactement comme sur l'image */}
          <h1 className="text-6xl md:text-8xl font-bold mb-6 tracking-wide text-white">SANO GLOBAL</h1>

          {/* Sous-titre exactement comme sur l'image */}
          <p className="text-lg md:text-xl mb-10 text-white max-w-4xl mx-auto leading-relaxed">
            Votre passerelle entre la Malaisie et l'Afrique pour une alimentation de qualité
          </p>

          {/* Bouton bleu exactement comme sur l'image */}
          <Button
            size="lg"
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 text-lg rounded-lg"
            onClick={() => scrollToSection("contact")}
          >
            Nous contacter
          </Button>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-800 mb-4">{t.about.title}</h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h3 className="text-2xl font-semibold text-slate-800 mb-4">{t.about.subtitle}</h3>
              <p className="text-gray-700 mb-6 leading-relaxed">{t.about.description}</p>

              <h3 className="text-2xl font-semibold text-slate-800 mb-4">{t.about.mission}</h3>
              <p className="text-gray-700 leading-relaxed">{t.about.missionText}</p>
            </div>

            <div className="text-center">
              <Image
                src="/images/pdg.jpg"
                alt="PDG Sanogo Abdoul Hamid"
                width={300}
                height={400}
                className="rounded-xl shadow-lg mx-auto mb-4"
              />
              <h4 className="text-xl font-semibold text-slate-800">{t.about.ceo}</h4>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center border-blue-200">
              <CardHeader>
                <Shield className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                <CardTitle className="text-slate-800">{t.about.values.quality}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Produits certifiés et conformes aux normes internationales</p>
              </CardContent>
            </Card>

            <Card className="text-center border-blue-200">
              <CardHeader>
                <Award className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                <CardTitle className="text-slate-800">{t.about.values.trust}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Transparence et fiabilité dans tous nos échanges</p>
              </CardContent>
            </Card>

            <Card className="text-center border-blue-200">
              <CardHeader>
                <Users className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                <CardTitle className="text-slate-800">{t.about.values.partnership}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Relations durables avec nos clients africains</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-800 mb-4">{t.products.title}</h2>
            <p className="text-xl text-gray-600 mb-6">{t.products.subtitle}</p>
            <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            <Card className="hover:shadow-lg transition-shadow border-blue-100">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Package className="w-8 h-8 text-blue-600" />
                </div>
                <CardTitle className="text-slate-800">{t.products.categories.oils.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-center">{t.products.categories.oils.description}</p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow border-blue-100">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Package className="w-8 h-8 text-blue-600" />
                </div>
                <CardTitle className="text-slate-800">{t.products.categories.rice.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-center">{t.products.categories.rice.description}</p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow border-blue-100">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Package className="w-8 h-8 text-blue-600" />
                </div>
                <CardTitle className="text-slate-800">{t.products.categories.canned.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-center">{t.products.categories.canned.description}</p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow border-blue-100">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Package className="w-8 h-8 text-blue-600" />
                </div>
                <CardTitle className="text-slate-800">{t.products.categories.spices.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-center">{t.products.categories.spices.description}</p>
              </CardContent>
            </Card>
          </div>

          {/* Product Images */}
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="text-center">
              <Image
                src="/images/produits-cafe.jpg"
                alt="Café 3 en 1"
                width={300}
                height={200}
                className="rounded-lg shadow-md mx-auto mb-4"
              />
              <h4 className="font-semibold text-slate-800">Café 3 en 1</h4>
            </div>

            <div className="text-center">
              <Image
                src="/images/produits-rucafe.jpg"
                alt="Biscuits Rucafe"
                width={300}
                height={200}
                className="rounded-lg shadow-md mx-auto mb-4"
              />
              <h4 className="font-semibold text-slate-800">Biscuits Premium</h4>
            </div>

            <div className="text-center">
              <Image
                src="/images/produits-sano.jpg"
                alt="Produits SANO"
                width={300}
                height={200}
                className="rounded-lg shadow-md mx-auto mb-4"
              />
              <h4 className="font-semibold text-slate-800">Gamme SANO</h4>
            </div>
          </div>

          <div className="text-center">
            <Badge variant="outline" className="text-slate-800 border-blue-200 px-4 py-2 text-lg">
              <CheckCircle className="w-5 h-5 mr-2" />
              {t.products.certifications}
            </Badge>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-800 mb-4">{t.services.title}</h2>
            <p className="text-xl text-gray-600 mb-6">{t.services.subtitle}</p>
            <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="hover:shadow-lg transition-shadow border-blue-100">
              <CardHeader>
                <Globe className="w-12 h-12 text-blue-600 mb-4" />
                <CardTitle className="text-slate-800">{t.services.list.visa.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">{t.services.list.visa.description}</p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow border-blue-100">
              <CardHeader>
                <Plane className="w-12 h-12 text-blue-600 mb-4" />
                <CardTitle className="text-slate-800">{t.services.list.travel.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">{t.services.list.travel.description}</p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow border-blue-100">
              <CardHeader>
                <Building className="w-12 h-12 text-blue-600 mb-4" />
                <CardTitle className="text-slate-800">{t.services.list.fairs.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">{t.services.list.fairs.description}</p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow border-blue-100">
              <CardHeader>
                <Package className="w-12 h-12 text-blue-600 mb-4" />
                <CardTitle className="text-slate-800">{t.services.list.import.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">{t.services.list.import.description}</p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow border-blue-100">
              <CardHeader>
                <Truck className="w-12 h-12 text-blue-600 mb-4" />
                <CardTitle className="text-slate-800">{t.services.list.logistics.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">{t.services.list.logistics.description}</p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow border-blue-100">
              <CardHeader>
                <Users className="w-12 h-12 text-blue-600 mb-4" />
                <CardTitle className="text-slate-800">{t.services.list.suppliers.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">{t.services.list.suppliers.description}</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Engagements Section */}
      <section id="engagements" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-800 mb-4">{t.engagements.title}</h2>
            <p className="text-xl text-gray-600 mb-6">{t.engagements.subtitle}</p>
            <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="hover:shadow-lg transition-shadow border-blue-100">
              <CardHeader>
                <CheckCircle className="w-12 h-12 text-blue-600 mb-4" />
                <CardTitle className="text-slate-800">{t.engagements.list.quality.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">{t.engagements.list.quality.description}</p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow border-blue-100">
              <CardHeader>
                <Shield className="w-12 h-12 text-blue-600 mb-4" />
                <CardTitle className="text-slate-800">{t.engagements.list.transparency.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">{t.engagements.list.transparency.description}</p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow border-blue-100">
              <CardHeader>
                <Users className="w-12 h-12 text-blue-600 mb-4" />
                <CardTitle className="text-slate-800">{t.engagements.list.partnership.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">{t.engagements.list.partnership.description}</p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow border-blue-100">
              <CardHeader>
                <Award className="w-12 h-12 text-blue-600 mb-4" />
                <CardTitle className="text-slate-800">{t.engagements.list.innovation.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">{t.engagements.list.innovation.description}</p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow border-blue-100">
              <CardHeader>
                <Globe className="w-12 h-12 text-blue-600 mb-4" />
                <CardTitle className="text-slate-800">{t.engagements.list.responsibility.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">{t.engagements.list.responsibility.description}</p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow border-blue-100">
              <CardHeader>
                <CheckCircle className="w-12 h-12 text-blue-600 mb-4" />
                <CardTitle className="text-slate-800">{t.engagements.list.excellence.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">{t.engagements.list.excellence.description}</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-800 mb-4">{t.contact.title}</h2>
            <p className="text-xl text-gray-600 mb-6">{t.contact.subtitle}</p>
            <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card className="border-blue-200">
              <CardHeader>
                <CardTitle className="text-slate-800">Formulaire de Contact</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <Input
                      placeholder={t.contact.form.name}
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      required
                      className="border-blue-200 focus:border-blue-500"
                    />
                  </div>
                  <div>
                    <Input
                      type="email"
                      placeholder={t.contact.form.email}
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      required
                      className="border-blue-200 focus:border-blue-500"
                    />
                  </div>
                  <div>
                    <Textarea
                      placeholder={t.contact.form.message}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      required
                      rows={5}
                      className="border-blue-200 focus:border-blue-500"
                    />
                  </div>
                  <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700">
                    <Mail className="w-4 h-4 mr-2" />
                    {t.contact.form.send}
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <div className="space-y-6">
              <Card className="border-blue-200">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4">
                    <Mail className="w-8 h-8 text-blue-600" />
                    <div>
                      <h4 className="font-semibold text-slate-800">{t.contact.info.email}</h4>
                      <a href="mailto:sanoglobal@yahoo.com" className="text-blue-600 hover:underline">
                        sanoglobal@yahoo.com
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-blue-200">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4">
                    <MessageCircle className="w-8 h-8 text-blue-600" />
                    <div>
                      <h4 className="font-semibold text-slate-800">{t.contact.info.whatsapp}</h4>
                      <a href="https://wa.me/601161196790" className="text-blue-600 hover:underline">
                        +60 11-6119 6790
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-blue-200">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4">
                    <MapPin className="w-8 h-8 text-blue-600" />
                    <div>
                      <h4 className="font-semibold text-slate-800">{t.contact.info.representative}</h4>
                      <p className="text-gray-700">{t.contact.info.repName}</p>
                      <a href="tel:+22676236343" className="text-blue-600 hover:underline">
                        +226 76 23 63 43
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-blue-200">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4">
                    <MapPin className="w-8 h-8 text-blue-600" />
                    <div>
                      <h4 className="font-semibold text-slate-800">Adresse</h4>
                      <p className="text-gray-700">Boulevard de l'indépendance</p>
                      <p className="text-gray-700">Immeuble de IB Bank, 1er étage</p>
                      <p className="text-gray-700">Bobo Dioulasso, Burkina Faso</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-800 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <Image src="/images/logo.jpg" alt="SANO GLOBAL Logo" width={40} height={40} className="rounded" />
                <span className="text-xl font-bold">SANO GLOBAL</span>
              </div>
              <p className="text-gray-300">
                Votre partenaire de confiance pour l'exportation de produits alimentaires de qualité.
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Contact Rapide</h4>
              <div className="space-y-2">
                <a
                  href="mailto:sanoglobal@yahoo.com"
                  className="flex items-center space-x-2 text-gray-300 hover:text-white"
                >
                  <Mail className="w-4 h-4" />
                  <span>sanoglobal@yahoo.com</span>
                </a>
                <a
                  href="https://wa.me/601161196790"
                  className="flex items-center space-x-2 text-gray-300 hover:text-white"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>+60 11-6119 6790</span>
                </a>
              </div>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Suivez-nous</h4>
              <div className="flex space-x-4">
                <a href="https://wa.me/601161196790" className="text-gray-300 hover:text-white">
                  <MessageCircle className="w-6 h-6" />
                </a>
                <a href="mailto:sanoglobal@yahoo.com" className="text-gray-300 hover:text-white">
                  <Mail className="w-6 h-6" />
                </a>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-700 pt-8 text-center">
            <p className="text-gray-300">{t.footer.rights}</p>
          </div>
        </div>
      </footer>

      {/* Bouton WhatsApp flottant comme sur le site de référence */}
      <a
        href="https://wa.me/601161196790"
        className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg transition-all duration-300 z-50"
        target="_blank"
        rel="noopener noreferrer"
      >
        <MessageCircle className="w-6 h-6" />
      </a>
    </div>
  )
}
