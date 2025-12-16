import React, { useState } from "react"; 
import {
  SafeAreaView,
  ScrollView,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  StatusBar,
  useWindowDimensions,
} from "react-native";

export default function Homepage() {

  const { width } = useWindowDimensions();
  const isDesktop = width >= 1000;
  const [currentSlide, setCurrentSlide] = useState(0);

  const streak = [
    { day: "Mon", color: "#5DC901" },
    { day: "Tue", color: "#5DC901" },
    { day: "Wed", color: "#5DC901" },
    { day: "Thu", color: "#5DC901" },
    { day: "Fri", color: "#dff3ceff" },
    { day: "Sat", color: "#eef5e8ff" },
    { day: "Sun", color: "#ecf5e5ff" },
  ];

  const focusSlides = [
    {
      image: require("../assets/focus1.png"),
      badge: "Today's scheduled topics",
      title: "Autonomic Nervous System Pharmacology – Adrenergic and Cholinergic Drugs",
      button: "Start Now",
      color: "#ff5fa2",
    },
    {
      image: require("../assets/focus2.png"),
      badge: "Topic of the day",
      title: "Cell Injury and Adaptation – Mechanisms, Morphology, Outcomes",
      button: "View NoteByte",
      color: "#b6e400",
    },
  ];

  return (
    <SafeAreaView style={styles.safe}>
      <StatusBar barStyle="dark-content" />

      <ScrollView showsVerticalScrollIndicator={false}>

{/* MOBILE TOP BAR */}
{!isDesktop && (
  <View style={styles.mobileTopBar}>
    <Text style={styles.mobileBrand}>Neet Buddy</Text>

    <View style={styles.mobileProfileWrap}>
      <Image
        source={require("../assets/dummy-profile.png")} // dummy image
        style={styles.mobileProfileImg}
      />
      <Image
        source={require("../assets/down-arrow.png")} // small arrow icon
        style={styles.mobileArrow}
      />
    </View>
  </View>
)}
        {/* HEADER */}
       
<View style={[styles.headerContainer, !isDesktop && styles.mobileHeaderContainer]}>

 
  <View style={[ styles.mainWhiteContainer,
    styles.shadowBottom,
    !isDesktop && styles.mobileWhiteContainer,]}>
    <View style={[styles.mainWhiteInner, !isDesktop && styles.mobileMainWhiteInner]}>

      {/* WELCOME CARD */}
      <View style={[styles.welcomeCard, !isDesktop && styles.mobileWelcomeCard]}>
        <Image
          source={require("../assets/logo.png")}
          style={[styles.welcomeLogo, !isDesktop && styles.mobileWelcomeLogo]}
        />

        <View style={[styles.welcomeContent, !isDesktop && styles.mobileWelcomeContent]}>
          <Text style={[styles.welcomeText, !isDesktop && styles.mobileWelcomeText]}>
            Welcome back, Karthik 👋
          </Text>
          <Text style={[styles.subText, !isDesktop && styles.mobileSubText]}>
            You did an amazing job today!
          </Text>

          <View style={[styles.streakRow, !isDesktop && styles.mobileStreakRow]}>
            {streak.map((s, i) => (
              <View key={i} style={styles.streakItem}>
                <View style={[styles.streakDot, { backgroundColor: s.color }]}>
                  {s.color === "#5DC901" && <Text style={styles.tick}>✓</Text>}
                </View>
                <Text style={styles.streakLabel}>{s.day}</Text>
              </View>
            ))}
          </View>
        </View>
      </View>

      {/* STATS  */}
      {isDesktop && (
        <View style={styles.statsRow}>
          <StatCard emoji="🌍" title="Global Rank" value="#128" sub="Top 1%" isDesktop />
          <StatCard emoji="⚡" title="Total XP" value="4,520" sub="+120 today" isDesktop />
          <StatCard emoji="🎯" title="Accuracy Rate" value="78%" sub="Improving" isDesktop />
        </View>
      )}

    </View>
  </View>

  {/* STATS-MOBILE */}
  {!isDesktop && (
    <View style={styles.mobileStatsOutside}>
      <StatCard emoji="🌍" title="Global Rank" value="#128" sub="Top 1%" />
      <StatCard emoji="⚡" title="Total XP" value="4,520" sub="+120 today" />
      <StatCard emoji="🎯" title="Accuracy Rate" value="78%" sub="Improving" />
    </View>
  )}

</View>

        {/*Quick Link Cards */}
        <Text style={[styles.sectionTitle, !isDesktop && styles.mobileSectionTitle]}>Quick Links</Text>

        <View style={[styles.quickRow, !isDesktop && styles.mobileQuickRow ]}>
          <QuickCard
            icon={require("../assets/quick1-logo.png")}
            title="Resume Learning"
            subtitle="Advanced Diagnostic and Interventional Techniques in Gastrointestinal and Hepatobiliary"
          />
          <QuickCard
            icon={require("../assets/quick2-logo.png")}
            title="All insights"
            subtitle="Your accuracy has improved by 14%"
          />
          <QuickCard
            icon={require("../assets/quick3-logo.png")}
            title="Practice with a Curated Set"
            subtitle="Comprehensive Clinical Management"
          />
        </View>

        {/*Today's Focus */}
       {isDesktop ? (
  <Text style={styles.sectionTitle}>Today's Focus</Text>
) : (
  <View style={styles.mobileFocusHeader}>
    <Text style={styles.mobileFocusTitle}>Today's Focus</Text>

    <TouchableOpacity
      onPress={() =>
        setCurrentSlide((prev) =>
          prev === focusSlides.length - 1 ? 0 : prev + 1
        )
      }
      style={styles.focusArrowBtn}
    >
      <Text style={styles.focusArrow}>›</Text>
    </TouchableOpacity>
  </View>
)}

        {/* Desktop  */}
        {/* TODAY'S FOCUS CONTENT */}
{isDesktop ? (
   
  <View style={styles.focusGrid}>
    <FocusCard
      image={require("../assets/focus1.png")}
      badge="Today's scheduled topics"
      title="Autonomic Nervous System Pharmacology – Adrenergic and Cholinergic Drugs"
      button="Start Now"
      color="#ff5fa2"
    />
    <FocusCard
      image={require("../assets/focus2.png")}
      badge="Topic of the day"
      title="Cell Injury and Adaptation – Mechanisms, Morphology, Outcomes"
      button="View NoteByte"
      color="#b6e400"
    />

    <View style={styles.sideColumn}>
      <SideCard
        logo={require("../assets/avatar.png")}
        text="Arjun0609 just threw you a challenge in 2 subjects Pharmacology - are you in?"
        btn="Accept Challenge"
      />
      <SideCard
        logo={require("../assets/avatar.png")}
        text="See smarter insights, elite question banks, and progress tools – go Max for more power."
        btn="Compare Plans"
      />
    </View>
  </View>
) : (
  /*  MOBILE   */
  <>
    {/* SLIDES */}
    <View style={styles.slideshowContainer}>
      <View style={styles.slideWrapper}>
        <Image
          source={focusSlides[currentSlide].image}
          style={styles.mobileSlideImage}
        />
        <View style={styles.slideBadge}>
          <Text style={styles.slideBadgeText}>
            {focusSlides[currentSlide].badge}
          </Text>
        </View>

        <View style={styles.slideContent}>
          <Text style={styles.slideTitle}>
            {focusSlides[currentSlide].title}
          </Text>
          <TouchableOpacity
            style={[
              styles.slideButton,
              { backgroundColor: focusSlides[currentSlide].color },
            ]}
          >
            <Text style={styles.slideButtonText}>
              {focusSlides[currentSlide].button}
            </Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.slideIndicatorsBottom}>
        {focusSlides.map((_, index) => (
          <View
            key={index}
            style={[
              styles.slideIndicatorBottom,
              currentSlide === index && styles.activeIndicatorBottom,
            ]}
          />
        ))}
      </View>
    </View>

    {/* SIDE CARDS (MOBILE) */}
    <View style={styles.mobileSideCards}>
      <SideCard
        logo={require("../assets/avatar.png")}
        text="Arjun0609 just threw you a challenge in 2 subjects Pharmacology - are you in?"
        btn="Accept Challenge"
      />
      <SideCard
        logo={require("../assets/avatar.png")}
        text="See smarter insights, elite question banks, and progress tools – go Max for more power."
        btn="Compare Plans"
      />
    </View>
  </>
)}

        <View style={{ height: "100%" }} />
      </ScrollView>

      {/*  BOTTOM NAVBAR   */}
      {!isDesktop && (
        <View style={styles.mobileBottomNav}>
          <View style={styles.mobileNavItem}>
            <Image source={require("../assets/home.png")} style={styles.mobileNavIcon} />
            <Text style={styles.mobileNavText}>Home</Text>
          </View>
          <View style={styles.mobileNavItem}>
            <Image source={require("../assets/study.png")} style={styles.mobileNavIcon} />
            <Text style={styles.mobileNavText}>Study Plan</Text>
          </View>
          <View style={styles.mobileNavItem}>
            <Image source={require("../assets/question.png")} style={styles.mobileNavIcon} />
            <Text style={styles.mobileNavText}>Question Bank</Text>
          </View>
          <View style={styles.mobileNavItem}>
            <Image source={require("../assets/battle.png")} style={styles.mobileNavIcon} />
            <Text style={styles.mobileNavText}>Battles</Text>
          </View>
        </View>
      )}
      
      {/* Desktop Bottom Navbar */}
      {isDesktop && (
        <View style={styles.bottomNavWrapper}>
          <View style={styles.bottomNav}>
            <Text style={styles.brandText}>Neet Buddy</Text>

            <View style={styles.navItems}>
              <NavItem icon={require("../assets/home.png")} label="Home" active={true} />
              <NavItem icon={require("../assets/study.png")} label="Study Plan" active={false} />
              <NavItem icon={require("../assets/question.png")} label="Question Bank" active={false} />
              <NavItem icon={require("../assets/battle.png")} label="Battles" active={false} />
            </View>

            <View style={styles.profileWrap}>
              <Image source={require("../assets/profile-icon.png")} style={styles.profileIcon} />
              <Text style={styles.profileName}>Karthik</Text>
            </View>
          </View>
        </View>
      )}
    </SafeAreaView>
  );
}

/* COMPONENTS  */

const StatCard = ({ emoji, title, value, sub, isDesktop }) => (
  <View style={[
    styles.statCard, 
    isDesktop ? styles.desktopStatCard : styles.mobileStatCard
  ]}>
    <Image source={require("../assets/stat-bg.png")} style={[
      styles.statBg, 
      isDesktop ? styles.desktopStatBg : styles.mobileStatBg
    ]} />

    {/* Emoji with white background */}
    <View style={[
      styles.statEmojiWrap, 
      isDesktop ? styles.desktopStatEmojiWrap : styles.mobileStatEmojiWrap
    ]}>
      <Text style={styles.statEmoji}>{emoji}</Text>
    </View>

    <Text style={[
      styles.statLabel, 
      isDesktop ? styles.desktopStatLabel : styles.mobileStatLabel
    ]}>{title}</Text>
    <Text style={[
      styles.statValue, 
      isDesktop ? styles.desktopStatValue : styles.mobileStatValue
    ]}>{value}</Text>
    <Text style={[
      styles.statSub, 
      isDesktop ? styles.desktopStatSub : styles.mobileStatSub
    ]}>{sub}</Text>
  </View>
);

const QuickCard = ({ icon, title, subtitle }) => (
  <View style={[styles.quickCard, styles.shadowBottom]}>
    <Image source={icon} style={styles.quickIcon} />
    <View style={{ flex: 1 }}>
      <Text style={styles.quickTitle}>{title}</Text>
      <Text style={styles.quickSub} numberOfLines={2}>{subtitle}</Text>
    </View>
  </View>
);

const FocusCard = ({ image, title, button, color, badge }) => (
  <View style={[styles.bigCard, styles.shadowBottom]}>
    <View>
      <Image source={image} style={styles.cardImage} />
      <View style={styles.topicBadge}>
        <Text style={styles.topicBadgeText}>{badge}</Text>
      </View>
    </View>

    <View style={styles.cardContent}>
      <Text style={styles.cardTitle}>{title}</Text>
      <TouchableOpacity style={[styles.focusBtn, { backgroundColor: color }]}>
        <Text style={styles.btnText}>{button}</Text>
      </TouchableOpacity>
    </View>
  </View>
);

const SideCard = ({ logo, text, btn }) => (
  <View style={[styles.sideCard, styles.shadowBottom]}>
    <View style={styles.sideRow}>
      <View style={styles.sideLogoPlain}>
        <Image source={logo} style={styles.sideLogo} />
      </View>
      <View style={{ flex: 1 }}>
        <Text style={styles.sideText}>{text}</Text>
        <TouchableOpacity style={styles.sideBtn}>
          <Text style={styles.sideBtnText}>{btn}</Text>
        </TouchableOpacity>
      </View>
    </View>
  </View>
);

const NavItem = ({ icon, label, active }) => (
  <View style={[styles.navItem, active && styles.navActive]}>
    <Image source={icon} style={styles.navIcon} />
    <Text style={[styles.navText, active && styles.navTextActive]}>{label}</Text>
  </View>
);

/* STYLES */

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: "#f6f7f9" },

  shadowBottom: {
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.06,
    shadowRadius: 10,
    elevation: 6,
  },

  //TOP for MOBILE
  mobileTopBar: {
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "space-between",
  marginHorizontal: 16,
  marginTop:    40,
  
},

mobileBrand: {
  fontSize: 18,
  fontWeight: "700",
  color: "#000",
},

mobileProfileWrap: {
  flexDirection: "row",
  alignItems: "center",
  gap: 6,
},

mobileProfileImg: {
  width: 28,
  height: 28,
  borderRadius: 14,
  backgroundColor: "#ddd",
},

mobileArrow: {
  width: 12,
  height: 12,
  resizeMode: "contain",
},

//Header
  headerContainer: {
    marginHorizontal: 40,
    marginTop: 7,
    marginBottom: 6,
  },
  mobileHeaderContainer: {
    marginHorizontal: 16,
    marginTop: 10,
    marginBottom: 0,
  },
mobileStatsOutside: {
  flexDirection: "row",
  justifyContent: "space-between",
  gap: 8,
  marginTop: 12,
  marginHorizontal: 2,
  height:100,
  width:"100%",
},


  mainWhiteContainer: {
    backgroundColor: "#fff",
    borderRadius: 16,
  },
  mainWhiteInner: {
    flexDirection: "row",
    padding: 24,
    gap: 16,
  },
  mobileMainWhiteInner: {
    flexDirection: "column",
    padding: 16,
    gap: 1,
    borderRadius: 3,
  },
  mobileWhiteContainer:{
    borderRadius: 8,
  },

//Welcome
  welcomeCard: {
    flex: 1,
    flexDirection: "row",
    gap: 16,
  },
  mobileWelcomeCard: {
    flexDirection: "row",
    alignItems: "center",
  },
  welcomeLogo: { width: 100, height: 100 },
  mobileWelcomeLogo: { width: 60, height: 60 },
  welcomeContent: { flex: 1 },
  mobileWelcomeContent: { flex: 1, marginLeft: 12 },
  welcomeText: { fontSize: 22, fontWeight: "700" },
  mobileWelcomeText: { fontSize: 18, fontWeight: "700" },
  subText: { color: "#777", marginVertical: 6 },
  mobileSubText: { fontSize: 12, color: "#777", marginVertical: 4 },
  streakRow: { flexDirection: "row", gap: 10, marginTop: 8 },
  mobileStreakRow: { flexDirection: "row", gap: 6, marginTop: 4 },

//Stat Card
  statsRow: {
    flexDirection: "row",
    gap: 8,
    width: 520,
  },
  mobileStatsRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    gap: 8,
    width: "100%",
  },

  statCard: {
    borderRadius: 6,
    backgroundColor: "#FFF2CE",
    position: "relative",
    overflow: "hidden",
  },
  desktopStatCard: {
    flex: 1,
    height: 110,
    padding: 14,
  },
  mobileStatCard: {
    flex: 1,
    height: "100%",
    padding: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  tick: {
    color: "#fff",
    fontSize: 12,
    fontWeight: "700",
    marginTop: -1,
  },
  statBg: {
    position: "absolute",
    opacity: 0.85,
  },
  desktopStatBg: {
    top: 1,
    right: 1,
    width: 80,
    height: 80,
  },
  mobileStatBg: {
    width: 40,
    height: 40,
    top: 5,
    right: 5,
  },
  statEmojiWrap: {
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 2,
  },
  desktopStatEmojiWrap: {
    width: 25,
    height: 25,
    borderRadius: 16,
    marginTop: -2,
  },
  mobileStatEmojiWrap: {
    width: 22,
    height: 22,
    borderRadius: 11,
    marginBottom: 6,
  },
  statEmoji: { fontSize: 16 },
  statLabel: { color: "#555" },
  desktopStatLabel: { 
    fontSize: 12, 
  },
  mobileStatLabel: { 
    fontSize: 10, 
    textAlign: "center", 
    marginBottom: 2,
    fontWeight: "600",
  },
  statValue: { fontWeight: "700" },
  desktopStatValue: { 
    fontSize: 20, 
  },
  mobileStatValue: { 
    fontSize: 16, 
    marginBottom: 2,
    color: "#333",
  },
  statSub: { color: "#888" },
  desktopStatSub: { 
    fontSize: 11, 
  },
  mobileStatSub: { 
    fontSize: 9, 
    textAlign: "center",
    color: "#666",
  },

//Sections
  sectionTitle: {
    fontSize: 20,
    fontWeight: "700",
    marginHorizontal: 40,
    marginBottom: 10,
    
  },
  mobileSectionTitle: {
    fontSize: 18,
    marginHorizontal: 16,
    marginBottom: 10,
    marginTop: 10,
  },

//Quick-Links
  quickRow: { 
    flexDirection: "row", 
    gap: 24, 
    marginHorizontal: 40,
    marginBottom: 8,
  },
  mobileQuickRow: {
    flexDirection: "column",
    gap: 12,
    marginHorizontal: 16,
    marginBottom: 16,
  },
  quickCard: {
    flex: 1,
    height: 75,
    borderRadius: 14,
    padding: 16,
    flexDirection: "row",
    gap: 12,
    backgroundColor: "#fff",
  },
  quickIcon: { width: 32, height: 32 },
  quickTitle: { fontWeight: "600" },
  quickSub: { fontSize: 11, color: "#777", lineHeight: 14 },

//Focus
  focusGrid: { 
    flexDirection: "row", 
    gap: 16, 
    marginHorizontal: 40,
    marginBottom: 20,
  },
  
  slideshowContainer: {
    marginHorizontal: 16,
    marginBottom: 16,
    borderRadius: 16,
    overflow: "hidden",
    backgroundColor: "#fff",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 4,
    position: "relative",
  },
 mobileFocusHeader: {
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "space-between",
  marginHorizontal: 16,
  marginTop: 10,
  marginBottom: 8,
},

mobileFocusTitle: {
  fontSize: 18,
  fontWeight: "700",
  color: "#000",
},

focusArrowBtn: {
  width: 32,
  height: 32,
  borderRadius: 16,
  alignItems: "center",
  justifyContent: "center",
},

focusArrow: {
  fontSize: 22,
  fontWeight: "600",
  color: "#000",
},

  topArrow: {
    width: 28,
    height: 28,
    borderRadius: 14,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 2,
  },
  topArrowText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333",
  },
  
  slideWrapper: {
    position: "relative",
  },
  mobileSlideImage: {
    width: "100%",
    height: 140,
    resizeMode: "cover",
  },
  slideBadge: {
    position: "absolute",
    top: 10,
    left: 10,
    backgroundColor: "#fff",
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 20,
  },
  slideBadgeText: {
    fontSize: 9,
    fontWeight: "600",
    color: "#333",
  },
  slideContent: {
    padding: 14,
  },
  slideTitle: {
    fontWeight: "600",
    fontSize: 14,
    marginBottom: 12,
    lineHeight: 18,
    color: "#333",
  },
  slideButton: {
    paddingVertical: 10,
    paddingHorizontal: 16,
    borderRadius: 6,
    alignSelf: "flex-start",
  },
  slideButtonText: {
    color: "#fff",
    fontWeight: "600",
    fontSize: 12,
  },
  
  slideIndicatorsBottom: {
    flexDirection: "row",
    justifyContent: "center",
    gap: 6,
    paddingVertical: 12,
    backgroundColor: "#f9f9f9",
    borderTopWidth: 1,
    borderTopColor: "#eee",
  },
  slideIndicatorBottom: {
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: "#ddd",
  },
  activeIndicatorBottom: {
    backgroundColor: "#5DC901",
    width: 8,
    height: 8,
    borderRadius: 4,
  },

//Side Cards
  sideColumn: { 
    width: 472, 
    gap: 14,
  },
mobileSideCards: {
  marginHorizontal: 16,
  gap: 12,
  marginBottom:110,
},


  sideCard: { 
    borderRadius: 14, 
    padding: 14, 
    backgroundColor: "#fff" 
  },
  sideRow: { 
    flexDirection: "row", 
    gap: 12 ,
      
  },
  sideLogoPlain: {
    width: 66,
    height: 66,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff",
  },
  sideLogo: { 
    width: 84, 
    height: 84 
  },
  sideText: { 
    fontSize: 13, 
    marginBottom: 10,
    color: "#333",
  },
  sideBtn: {
    backgroundColor: "#ffd54f",
    paddingVertical: 9,
    paddingHorizontal: 12,
    borderRadius: 8,
    alignSelf: "flex-start",
  },
  sideBtnText: { 
    fontWeight: "600",
    fontSize: 12,
    color: "#333",
  },

//Bottom Bar
  bottomNavWrapper: {
    position: "absolute",
    bottom: 4,
    left: 0,
    right: 0,
    alignItems: "center",
  },
  bottomNav: {
    width: "95%",
    height: 60,
    backgroundColor: "#FFF3CD",
    borderRadius: 12,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 24,
  },
  
  mobileBottomNav: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    height: 65,
    backgroundColor: "#FFF3CD",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    paddingVertical: 8,
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: -2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 10,
  },
  
  mobileNavItem: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 6,
  },
  mobileNavIcon: {
    width: 22,
    height: 22,
    resizeMode: "contain",
    marginBottom: 4,
  },
  mobileNavText: {
    fontSize: 11,
    fontWeight: "500",
    color: "#555",
    textAlign: "center",
  },
  
  brandText: { 
    fontWeight: "700", 
    fontSize: 14,
    color: "#333",
  },
  navItems: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    gap: 16,
  },
  navItem: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 12,
  },
  navActive: { 
    backgroundColor: "#FFD54F" 
  },
  navIcon: { 
    width: 16, 
    height: 16, 
    resizeMode: "contain" 
  },
  navText: { 
    fontSize: 12, 
    fontWeight: "600", 
    color: "#555" 
  },
  navTextActive: { 
    color: "#000" 
  },
  profileWrap: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  profileIcon: { 
    width: 26, 
    height: 26, 
    borderRadius: 13 
  },
  profileName: { 
    fontSize: 12, 
    fontWeight: "600",
    color: "#333",
  },
//Focus Card -- Desktop 
  bigCard: {
    width: "29%",
    borderRadius: 16,
    overflow: "hidden",
    backgroundColor: "#fff",
  },
  cardImage: { 
    width: "100%", 
    height: 160, 
    resizeMode: "cover" 
  },
  topicBadge: {
    position: "absolute",
    top: 10,
    right: 10,
    backgroundColor: "#fff",
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 20,
  },
  topicBadgeText: {
    fontSize: 10,
    fontWeight: "600",
    color: "#333",
  },
  cardContent: { 
    padding: 14 
  },
  cardTitle: { 
    fontWeight: "600", 
    fontSize: 14, 
    marginBottom: 10,
    color: "#333",
  },
  focusBtn: {
    paddingVertical: 10,
    paddingHorizontal: 16,
    borderRadius: 6,
    alignSelf: "flex-start",
  },
  btnText: { 
    color: "#fff", 
    fontWeight: "600",
    fontSize: 12,
  },

//Streak
  streakItem: { 
    alignItems: "center" 
  },
  streakDot: { 
    width: 18, 
    height: 18, 
    borderRadius: 9,
    alignItems: "center",
    justifyContent: "center",
  },
  streakLabel: { 
    fontSize: 10,
    color: "#5DC901",
  },
});