const NAV_DATA = [
  {
    label: "Start",
    items: [
      { title: "Home", path: "index.html", classes: ["nav-home"] }
    ]
  },
  {
    label: "Module 1",
    groups: [
      {
        label: "Chapter 1",
        items: [
          { title: "1.1.2 Skills and Abilities", path: "pages/module_1/1.1.2.html" },
          { title: "1.2.1 Best Practice Methodology", path: "pages/module_1/1.2.1.html" },
          { title: "1.2.2 Identify the Problem", path: "pages/module_1/1.2.2.html" },
          { title: "1.2.3 Establish and Test a Theory", path: "pages/module_1/1.2.3.html" },
          { title: "1.2.4 Question the Obvious", path: "pages/module_1/1.2.4.html" },
          { title: "1.2.5 Establish a New Theory or Escalate", path: "pages/module_1/1.2.5.html" },
          { title: "1.2.6 Implement a Plan of Action", path: "pages/module_1/1.2.6.html" },
          { title: "1.2.7 Verify and Document", path: "pages/module_1/1.2.7.html" },
          { title: "1.3.1 Troubleshooting Methodology", path: "pages/module_1/1.3.1.html" },
          { title: "1.4 Quiz", path: "pages/module_1/1.4_Module_Quiz.html", classes: ["nav-quiz"] }
        ]
      },
      {
        label: "Chapter 2",
        items: [
          { title: "2.1.1 PCs", path: "pages/module_1/2.1.1_Personal_Computers.html" },
          { title: "2.1.3 Peripherals", path: "pages/module_1/2.1.3_Peripheral_Devices.html" },
          { title: "2.1.4 USB Cables", path: "pages/module_1/2.1.4_Universal_Serial_Bus_Cables.html" },
          { title: "2.1.5 USB Standards", path: "pages/module_1/2.1.5_USB_Cables_And_Standards.html" },
          { title: "2.1.7 USB Lab", path: "pages/module_1/2.1.7_Lab_Steps.html" },
          { title: "2.1.8 Displays", path: "pages/module_1/2.1.8_Display_Types.html" },
          { title: "2.1.9 Display Parts", path: "pages/module_1/2.1.9_Display_Components.html" },
          { title: "2.1.10 HDMI/DP", path: "pages/module_1/2.1.10_HDMI_And_DisplayPort_Video_Cables.html" },
          { title: "2.1.11 Thunderbolt", path: "pages/module_1/2.1.11_Thunderbolt_Interface.html" },
          { title: "2.1.12 Lightning", path: "pages/module_1/2.1.12_Lightning_Interface.html" },
          { title: "2.1.13 SATA", path: "pages/module_1/2.1.13_SATA_Interface.html" },
          { title: "2.1.14 Molex", path: "pages/module_1/2.1.14_Molex_Power_Connectors.html" },
          { title: "2.1.15 eSATA", path: "pages/module_1/2.1.15_External_Sata.html" },
          { title: "2.1.16 Desktop Lab", path: "pages/module_1/2.1.16_Lab_Set_Up_A_Desktop_Computer.html" },
          { title: "2.1.17 Review", path: "pages/module_1/2.1.17_Lesson_Review.html" },
          { title: "2.2.1 Mobo Functions", path: "pages/module_1/2.2.1_Motherboard_Functions.html" },
          { title: "2.2.2 Safety/ESD", path: "pages/module_1/2.2.2_Electrical_Safety.html" },
          { title: "2.2.3 CPU/RAM", path: "pages/module_1/2.2.3_Motherboard_CPU_System_Memory_Connectors.html" },
          { title: "2.2.4 Storage Conn.", path: "pages/module_1/2.2.4_Motherboard_Storage_Connectors.html" },
          { title: "2.2.5 PCIe", path: "pages/module_1/2.2.5_PCIe.html" },
          { title: "2.2.6 PCI", path: "pages/module_1/2.2.6_PCI.html" },
          { title: "2.2.7 Form Factors", path: "pages/module_1/2.2.7_Motherboard_Form_Factors.html" },
          { title: "2.2.8 Mobo Install", path: "pages/module_1/2.2.8_Motherboard_Installation.html" },
          { title: "2.2.12 Video Cards", path: "pages/module_1/2.2.12_Video_Cards.html" },
          { title: "2.2.14 Capture Cards", path: "pages/module_1/2.2.14_Capture_Cards.html" },
          { title: "2.2.15 Sound Cards", path: "pages/module_1/2.2.15_Sound_Cards.html" },
          { title: "2.2.16 NICs", path: "pages/module_1/2.2.16_Network_Interface_Cards.html" },
          { title: "2.2.18 Review", path: "pages/module_1/2.2.18_Lesson_Review.html" },
          { title: "2.3.1 DVI/VGA", path: "pages/module_1/2.3.1_DVI_And_VGA_Video_Cables.html" },
          { title: "2.3.3 Serial", path: "pages/module_1/2.3.3_Serial_Cables.html" },
          { title: "2.3.4 Adapters", path: "pages/module_1/2.3.4_Adapter_Cables.html" },
          { title: "2.3.5 Review", path: "pages/module_1/2.3.5_Lesson_Review.html" },
          { title: "2.4 Lab", path: "pages/module_1/2.4_Lab.html" },
          { title: "Unit 2 Resources", path: "pages/module_1/additional_resources/unit_2_additional_resources.html" },
          { title: "2.5.2 Motherboards", path: "pages/module_1/additional_resources/2.5.2_Motherboards.html" },
          { title: "2.5.3 Cable History", path: "pages/module_1/additional_resources/2.5.3_History_Of_Cables.html" },
          { title: "2.5.5 Legacy Cables", path: "pages/module_1/additional_resources/2.5.5_Legacy_Cables_Timeline.html" }
        ]
      }
    ]
  },
  {
    label: "Module 2",
    items: [
      { title: "3.1.1 PSU", path: "pages/module_2/3.1.1_PSU.html" },
      { title: "3.1.2 Install a PSU Lab", path: "pages/module_2/3.1.2_Lab_Install_A_Power_Supply.html" },
      { title: "3.1.3 Wattage Rating", path: "pages/module_2/3.1.3_Wattage_Rating.html" },
      { title: "3.1.4 Power Supply Connectors", path: "pages/module_2/3.1.4_Power_Supply_Connectors.html" },
      { title: "3.1.5 20-pin to 24-pin Adapter", path: "pages/module_2/3.1.5_20_Pin_to_24_Pin_Motherboard_Adapter.html" },
      { title: "3.1.6 Modular Power Supplies", path: "pages/module_2/3.1.6_Modular_Power_Supplies.html" },
      { title: "3.1.7 Redundant Power Supplies", path: "pages/module_2/3.1.7_Redundant_Power_Supplioes.html" },
      { title: "3.1.9 Troubleshoot PSU Problems Lab", path: "pages/module_2/3.1.9_Lab_Troubleshoot_Power_Supply_Problems.html" },
      { title: "3.1.10 Fan Cooling Systems", path: "pages/module_2/3.1.10_Fan_Cooling_Systems.html" },
      { title: "3.1.11 Heat Sinks and Thermal Paste", path: "pages/module_2/3.1.11_Heat_Sinks_And_Thermal_Paste.html" },
      { title: "3.1.12 Fans", path: "pages/module_2/3.1.12_Fans.html" },
      { title: "3.1.13 Liquid Cooling Systems", path: "pages/module_2/3.1.13_Liquid_Cooling_Systems.html" },
      { title: "3.1.14 Lesson Review", path: "pages/module_2/3.1.14_Lesson_Review.html" },
      { title: "3.2.1 Storage Devices", path: "pages/module_2/3.2.1_Storage_Devices.html" },
      { title: "3.2.2 Mass Storage Device", path: "pages/module_2/3.2.2_Mass_Storage_Device.html" },
      { title: "3.2.3 Solid State Drives", path: "pages/module_2/3.2.3_Solid_State_Drives.html" },
      { title: "3.2.4 Hard Disk Drives", path: "pages/module_2/3.2.4_Hard_Disk_Drives.html" },
      { title: "3.2.5 RAID", path: "pages/module_2/3.2.5_Redundant_ Array_of_ Independent_Disks.html" },
      { title: "3.2.6 RAID 0 and RAID 1", path: "pages/module_2/3.2.6_RAID_0_RAID_1.html" },
      { title: "3.2.7 RAID 5 and RAID 10", path: "pages/module_2/3.2.7_RAID_5_RAID_10.html" },
      { title: "3.2.8 RAID 6", path: "pages/module_2/3.2.8_RAID_6.html" },
      { title: "3.2.9 RAID Types", path: "pages/module_2/3.2.9_RAID_Types.html" },
      { title: "3.2.10 Removable Storage Drives", path: "pages/module_2/3.2.10_Removable_Storage_Drives.html" },
      { title: "3.2.11 Optical Drives", path: "pages/module_2/3.2.11_Optical_Drives.html" },
      { title: "3.2.12 Install SATA Devices Lab", path: "pages/module_2/3.2.12_Lab_Install_SATA_Devices.html" },
      { title: "3.2.13 Lesson Review", path: "pages/module_2/3.2.13_Lesson_Review.html" },
      { title: "3.3.1 System RAM and Virtual Memory", path: "pages/module_2/3.3.1_System_RAM_Virtual_Memory.html" },
      { title: "3.3.2 RAM Types", path: "pages/module_2/3.3.2_RAM_Types.html" },
      { title: "3.3.3 Memory Modules", path: "pages/module_2/3.3.3_Memory_Modules.html" },
      { title: "3.3.4 Select Memory By Sight Lab", path: "pages/module_2/3.3.4_Lab_Select_Memory_By_Sight.html" },
      { title: "3.3.5 Multi-channel System Memory", path: "pages/module_2/3.3.5_Multi-channel_System_Memory.html" },
      { title: "3.3.6 Memory Troubleshooting", path: "pages/module_2/3.3.6_Memory_Troubleshooting.html" },
      { title: "3.3.8 ECC RAM", path: "pages/module_2/3.3.8_ECC_RAM.html" },
      { title: "3.4.1 CPU Architecture", path: "pages/module_2/3.4.1_CPU_Architecture.html" },
      { title: "3.4.2 x86 CPU Architecture", path: "pages/module_2/3.4.2_x86_CPU_Architecture.html" },
      { title: "3.4.3 x64 CPU Architecture", path: "pages/module_2/3.4.3_x64_CPU_Architechture.html" },
    ]
  },
  {
    label: "Module 3",
    items: [
      { title: "5.1.1 LANs and WANs", path: "pages/module_3/5.1.1_LANS_WANS.html" },
      { title: "5.1.2 SOHO and Enterprise Networks", path: "pages/module_3/5.1.2_SOHO_Enterprise_Networks.html" },
      { title: "5.1.3 Datacenters", path: "pages/module_3/5.1.3_Datacenters.html" },
      { title: "5.2.1 Network Interface Card", path: "pages/module_3/5.2.1_Network_Interface_Card.html" },
      { title: "5.2.3 Patch Panels", path: "pages/module_3/5.2.3_Patch_Panels.html" },
      { title: "5.2.6 Switches", path: "pages/module_3/5.2.6_Switches.html" },
      { title: "5.2.9 Unmanaged and Managed Switches", path: "pages/module_3/5.2.9_Unmanaged_and_Managed_Switches.html" },
      { title: "5.2.10 Power Over Ethernet", path: "pages/module_3/5.2.10_Power_Over_Ethernet.html" },
      { title: "5.2.11 Lesson Review", path: "pages/module_3/5.2.11_Lesson_Review.html" },
      { title: "5.3.1 Unshielded Twisted Pair", path: "pages/module_3/5.3.1_Unshielded_Twisted_Pair.html" },
      { title: "5.3.4 Cat Standards", path: "pages/module_3/5.3.4_Cat_Standards.html" },
      { title: "5.3.7 Copper Cabling Installation Tools", path: "pages/module_3/5.3.7_Copper_Cabling_Installation_Tools.html" },
      { title: "5.3.9 Network Taps", path: "pages/module_3/5.3.9_Network_Taps.html" },
      { title: "5.3.10 Copper Cabling Installation Considerations", path: "pages/module_3/5.3.10_Copper_Cabling_Installation_Considerations.html" },
      { title: "5.3.11 Optical Cabling", path: "pages/module_3/5.3.11_Optical_Cabling.html" },
      { title: "5.3.13 Coaxial Cabling", path: "pages/module_3/5.3.13_Coaxial_Cabling.html" },
      { title: "5.3.14 Lesson Review", path: "pages/module_3/5.3.14_Lesson_Review.html" },
      { title: "5.4.1 Access Points", path: "pages/module_3/5.4.1_Access_Points.html" },
      { title: "5.4.2 Frequency Bands", path: "pages/module_3/5.4.2_Frequency_Bands.html" },
      { title: "5.4.3 IEEE 802.11a", path: "pages/module_3/5.4.3_IEEE_802.11a.html" },
      { title: "5.4.4 IEEE 802.11b/g", path: "pages/module_3/5.4.4_IEEE_802.11b_g.html" },
      { title: "6.1.11 Lesson Review", path: "pages/module_3/6.1.11_Lesson_Review.html" },
      { title: "6.3.7 Lesson Review", path: "pages/module_3/6.3.7_Lesson_Review.html" },
      { title: "6.4.8 Lesson Review", path: "pages/module_3/6.4.8_Lesson_Review.html" },
      { title: "6.7 Module Quiz", path: "pages/module_3/6.7_Module_Quiz.html", classes: ["nav-quiz"] },
    ]
  },
  {
    label: "Module 4",
    items: [
      { title: "7.1.1 File/Print Servers", path: "pages/module_4/7.1.1_File_Print_Servers.html" },
      { title: "7.1.2 Database Servers", path: "pages/module_4/7.1.2_Database_Servers.html" },
      { title: "7.1.3 Web Servers", path: "pages/module_4/7.1.3_Web_Servers.html" },
      { title: "7.1.4 HTTPS", path: "pages/module_4/7.1.4_HTTPS.html" },
      { title: "7.1.5 Mail Servers", path: "pages/module_4/7.1.5_Mail_Servers.html" },
      { title: "7.1.6 Mailbox Servers", path: "pages/module_4/7.1.6_Mailbox_Servers.html" },
      { title: "7.1.8 Directory/Auth Servers", path: "pages/module_4/7.1.8_Directory_Auth_Servers.html" },
      { title: "7.1.9 Remote Terminal Access", path: "pages/module_4/7.1.9_Remote_Terminal_Access.html" },
      { title: "7.1.10 Time Servers", path: "pages/module_4/7.1.10_Time_Servers.html" },
      { title: "7.1.11 Network Monitoring Servers", path: "pages/module_4/7.1.11_Network_Monitoring_Servers.html" },
      { title: "7.1.12 Lesson Review", path: "pages/module_4/7.1.12_Lesson_Review.html" },
      { title: "7.2.2 Use A Proxy Server Lab", path: "pages/module_4/7.2.2_Lab_Use_A_Proxy_Server.html" },
      { title: "7.2.3 Spam Gateways and UTM", path: "pages/module_4/7.2.3_Spam_Gateways_Unified_Threat_Management.html" },
      { title: "7.2.4 Load Balancers", path: "pages/module_4/7.2.4_Load_Balancers.html" },
      { title: "7.2.5 Legacy Systems", path: "pages/module_4/7.2.5_Legacy_Systems.html" },
      { title: "7.3.1 Troubleshoot Wired Connectivity", path: "pages/module_4/7.3.1_Troubleshoot_Wired_Connectivity.html" },
      { title: "7.3.2 Troubleshoot Network Speed Issues", path: "pages/module_4/7.3.2_Troubleshoot_Network_Speed_Issues.html" },
      { title: "7.3.3 Fix A Network Connection Lab", path: "pages/module_4/7.3.3_Lab_Fix_A_Network_Connection.html" },
      { title: "7.3.4 Troubleshoot Wireless Issues", path: "pages/module_4/7.3.4_Troubleshoot_Wireless_Issues.html" },
      { title: "7.3.5 Troubleshoot VoIP Issues", path: "pages/module_4/7.3.5_Troubleshoot_VoIP_Issues.html" },
      { title: "7.3.6 Troubleshoot Limited Connectivity", path: "pages/module_4/7.3.6_Troubleshoot_Limited_Connectivity.html" },
      { title: "7.3.7 Lesson Review", path: "pages/module_4/7.3.7_Lesson_Review.html" },
      { title: "7.4 Troubleshoot A Network Issue Lab", path: "pages/module_4/7.4_Lab_Troubleshoot_A_Network_Issue.html" },
      { title: "7.5.1 Client Server Relationship", path: "pages/module_4/7.5.1_Client_Server_Relationship.html" },
      { title: "7.5.2 Troubleshooting Networks", path: "pages/module_4/7.5.2_Troubleshooting_Networks.html" },
      { title: "7.5.3 Server Comparison Project", path: "pages/module_4/7.5.3_Exercise_Server_Comparison_Project.html.html" },
      { title: "7.5.4 Exploring Everyday Embedded Systems", path: "pages/module_4/7.5.5_Exercise_Exploring_Everyday_Embedded_Systems.html" },
      { title: "7.5.5 Troubleshooting with Command-Line Tools", path: "pages/module_4/7.5.5_Troubleshooting_With_Command-Line_Tools.html" },
      { title: "7.5.6 Build a Smart Home Device Capstone", path: "pages/module_4/7.5.6_Build_A_Smart_Home_Device_Capstone.html" },
      { title: "7.6 Module Quiz", path: "pages/module_4/7.6_Module_Quiz.html", classes: ["nav-quiz"] },
      { title: "7.7 Checkpoint Review", path: "pages/module_4/7.6_Checkpoint_Review.html" },
      { title: "8.1.1 Hypervisors", path: "pages/module_4/8.1.1_Hypervisors.html" },
      { title: "8.1.2 Uses for Virtualization", path: "pages/module_4/8.1.2_Uses_For_Virtualization.html" },
      { title: "8.1.3 Explore Virtualization Lab", path: "pages/module_4/8.1.3_Lab_Explore_Virtualization.html" },
      { title: "8.1.4 Virtualization Resource Requirements", path: "pages/module_4/8.1.4_Virtualization_Resource_Requirements.html" },
      { title: "8.1.5 Virtualization Security Requirements", path: "pages/module_4/8.1.5_Virtualization_Security_Requirements.html" },
      { title: "8.1.6 Create Virtual Hard Disks Lab", path: "pages/module_4/8.1.6_Lab_Create_Virtual_Hard_Disks.html" },
      { title: "8.1.7 Lesson Review", path: "pages/module_4/8.1.7_Lesson_Review.html" },
      { title: "8.2.1 Cloud Characteristics", path: "pages/module_4/8.2.1_Cloud_Characteristics.html" },
      { title: "8.2.2 Introduction to Cloud Deployment Models", path: "pages/module_4/8.2.2_Introduction_To_Cloud_Deployment_Models.html" },
      { title: "8.2.3 Common Cloud Deployment Models", path: "pages/module_4/8.2.3_Common_Cloud_Deployment_Models.html" },
      { title: "8.2.4 Use the Azure Interface Lab", path: "pages/module_4/8.2.4_Use_The_Azure_Interface.html" },
      { title: "8.2.5 Common Cloud Service Models", path: "pages/module_4/8.2.5_Common_Cloud_Service_Models.html" },
      { title: "8.2.6 Manage IaaS VMs in Azure Lab", path: "pages/module_4/8.2.6_Manage_IaaS_VM_in_Azure.html" },
    ]
  },
  {
    label: "Module 5",
    items: [
      { title: "9.1.1 Mobile Device Accessories", path: "pages/module_5/9.1.1_Mobile_Device_Accesories.html" },
      { title: "9.1.2 Mobile Device Wired Connection Methods", path: "pages/module_5/9.1.2_Mobile_Device_Wired_Connection_Methods.html" },
      { title: "9.1.3 Port Replicators and Docking Stations", path: "pages/module_5/9.1.3_Port_Replicators_and_Docking_Stations.html" },
      { title: "9.1.4 Manage Mobile Devices Lab", path: "pages/module_5/9.1.4_Lab_Manage_Mobile_Devices.html" },
      { title: "9.1.5 Wi-Fi Wireless Network", path: "pages/module_5/9.1.5_Wi-Fi_Wireless_Network.html" },
      { title: "9.1.6 Connect to a Wireless Network", path: "pages/module_5/9.1.6_Connect_to_A_Wireless_Network.html" },
      { title: "9.1.7 Cellular Data Networking", path: "pages/module_5/9.1.7_Cellular_Data_Networking.html" },
      { title: "9.1.8 Mobile Hotspots and Tethering", path: "pages/module_5/9.1.8_Mobile_Hotspots_and_Tethering.html" },
      { title: "9.1.9 Bluetooth Wireless Connections", path: "pages/module_5/9.1.9_Bluetooth_Wireless_Connections.html" },
      { title: "9.1.10 NFC Wireless Communications", path: "pages/module_5/9.1.10_NFC_Wireless_Communications.html" },
      { title: "9.2.1 Mobile Apps", path: "pages/module_5/9.2.1_Mobile_Apps.html" },
      { title: "9.2.2 Account Setup", path: "pages/module_5/9.2.2_Account_Setup.html" },
      { title: "9.2.4 Email Configuration Options", path: "pages/module_5/9.2.4_Email_Configuration_Options.html" },
      { title: "9.2.5 Synchronization Methods", path: "pages/module_5/9.2.5_Syncronization_methods.html" },
      { title: "9.2.6 Enterprise Mobility Management", path: "pages/module_5/9.2.6_Enterprise_Mobility_Managment.html" },
      { title: "9.2.7 Location Services", path: "pages/module_5/9.2.7_Location_Services.html" },
      { title: "9.3.1 Laptop Disassembly Processes", path: "pages/module_5/9.3.1_Laptop_Disassembly.html" },
      { title: "9.3.3 RAM and Adapter Replacement", path: "pages/module_5/9.3.3_RAM_and_Adapter_Replacement.html" },
      { title: "9.3.4 Disk Upgrades and Replacement", path: "pages/module_5/9.3.4_Disk_Upgrades_and_Replacement.html" },
      { title: "9.3.5 Keyboard and Security Component Replacement", path: "pages/module_5/9.3.5_Keyboard_and_Security_Component.html" },
      { title: "9.3.6 Lesson Review", path: "pages/module_5/9.3.6_Lesson_Review.html" },
      { title: "9.4.1 Power and Battery Issues", path: "pages/module_5/9.4.1_Power_and_Batter_Issues.html" },
      { title: "9.4.2 Hardware Failure Issues", path: "pages/module_5/9.4.2_Hardware_Failure_Issues.html" },
      { title: "9.4.4 Screen and Calibration Issues", path: "pages/module_5/9.4.4_Screen_and_Calibration_Issues.html" },
      { title: "9.4.5 Connectivity Issues", path: "pages/module_5/9.4.5_Connectivity_Issues.html" },
      { title: "9.4.6 Malware Issues", path: "pages/module_5/9.4.6_Malware_Issues.html" },
      { title: "9.4.7 Lesson Review", path: "pages/module_5/9.4.7_Lesson_Review.html" },
      { title: "9.5 Mobile Hardware Support Lab", path: "pages/module_5/9.5_Lab_Mobile_Hardware_Support.html" },
      { title: "9.6.2 Peripheral History Timeline Exercise", path: "pages/module_5/9.6.2_Exercise_Peripheral_History_Timeline.html" },
      { title: "9.6.3 App Exploration and Categorization Exercise", path: "pages/module_5/9.6.3_Exercise_App_Exploration_and_Categorization.html" },
      { title: "9.6.4 Laptop Hardware Budgeting Activity", path: "pages/module_5/9.6.4_Exercise_Laptop_Hardware_Budgeting_Activity.html" },
      { title: "9.6.5 Troubleshooting Flowchart Exercise", path: "pages/module_5/9.6.5_Exercise_Troubleshooting_Flowchart.html" },
      { title: "9.6.6 Peripheral Design Challenge Capstone", path: "pages/module_5/9.6.6_Exercise_Peripherals_Design_Capstone.html" },
      { title: "10.1.1 Printer Unboxing and Setup Location", path: "pages/module_5/10.1.1_Printer_Unboxing_and_Setup_Location.html" },
      { title: "10.1.2 Firmware Management in MFDs and Printers", path: "pages/module_5/10.1.2_Firmware_Management_in_MFDs_and_Printers.html" },
      { title: "10.1.3 Print Device Connectivity", path: "pages/module_5/10.1.3_Print_Device_Connectivity.html" },
      { title: "10.1.4 Select and Install a Printer Lab", path: "pages/module_5/10.1.4_Lab_Select_and_Install_A_Printer.html" },
      { title: "10.1.5 Printer Drivers and Page Description Languages", path: "pages/module_5/10.1.5_Printers_Drivers_and_Page_Description_Languages.html" },
      { title: "10.1.6 Printer Properties", path: "pages/module_5/10.1.6_Printer_Properties.html" },
      { title: "10.1.7 Printing Preferences", path: "pages/module_5/10.1.7_Printing_Oreferences.html" },
      { title: "10.1.8 Printer Sharing", path: "pages/module_5/10.1.8_Printer_Sharing.html" },
      { title: "10.1.9 Connect to a Printer", path: "pages/module_5/10.1.9_Connect_to_a_Printer.html" },
      { title: "10.1.10 Configure Network Printing Lab", path: "pages/module_5/10.1.10_Lab_Configure_Network_Printing.html" },
      { title: "10.1.11 Printer Security", path: "pages/module_5/10.1.11_Printer_Security.html" },
      { title: "10.1.12 Security Print and Badging Activity", path: "pages/module_5/10.1.12_Activity_Security_Print_and_Badging.html" },
      { title: "10.1.13 Scanner Configuration", path: "pages/module_5/10.1.13_Scanner_Configuration.html" },
      { title: "10.1.14 Lesson Review", path: "pages/module_5/10.1.14_Lesson_Review.html" },
      { title: "10.2.1 Laser Printer Imaging Process", path: "pages/module_5/10.2.1_Laser_Printer_Imaging_Process.html" },
      { title: "10.2.2 Laser Printer Maintenance", path: "pages/module_5/10.2.2_Laser_Printer_Maintenance.html" },
      { title: "10.2.3 Inkjet Printer Imaging Process", path: "pages/module_5/10.2.3_Inkjet_Printer_Imaging_Process.html" },
      { title: "10.2.4 Inkjet Printer Maintenance", path: "pages/module_5/10.2.4_Inkjet_Printer_Maintenance.html" },
      { title: "10.2.5 Thermal Printer Maintenance", path: "pages/module_5/10.2.5_Thermal_Printer_Maintenance.html" },
      { title: "10.2.6 Impact Printer Maintenance", path: "pages/module_5/10.2.6_Impact_Printer_Maintenance.html" },
      { title: "10.2.8 Printer Basics", path: "pages/module_5/10.2.8_Printer_Basics.html" },
      { title: "10.3.1 Printer Connectivity Issues", path: "pages/module_5/10.3.1_Printer_Conectivity_Issues.html" },
      { title: "10.3.2 Print Feed Issues", path: "pages/module_5/10.3.2_Print_Feed_Issues.html" },
      { title: "10.3.3 Print Quality Issues", path: "pages/module_5/10.3.3_Print_Quality_Issues.html" },
      { title: "10.3.4 Finishing Issues", path: "pages/module_5/10.3.4_Finishing_Issues.html" },
      { title: "10.3.5 Print Job Issues", path: "pages/module_5/10.3.5_Print_Job_Issues.html" },
      { title: "10.3.7 Lesson Review", path: "pages/module_5/10.3.7_Lesson_Review.html" },
      { title: "10.5.1 Connecting Printers", path: "pages/module_5/10.5.1_Connecting_Printers.html" },
      { title: "10.5.2 Printer Troubleshooting", path: "pages/module_5/10.5.2_Printer_Troubleshooting.html" },
      { title: "10.5.3 Compare Printer Types and Maintenance Practices Exercise", path: "pages/module_5/10.5.3_Exercise_Compare_Printer_Types_and_Maintenance_Practices.html" },
      { title: "10.5.4 Printer Maintenance Best Practices Exercise", path: "pages/module_5/10.5.4_Exercise_Printer_Maintenance_Best_Practices.html" },
      { title: "10.5.5 Troubleshooting Common Printer Problems Exercise", path: "pages/module_5/10.5.5_Exercise_Troubleshooting_Common_Printer_Problems.html" },
      { title: "10.5.6 Printer Troubleshooting Flowchart", path: "pages/module_5/10.5.6_Printer_Troubleshooting_Flowchart.html" },
      { title: "10.6 Module Quiz", path: "pages/module_5/10.6_Module_Quiz.html", classes: ["nav-quiz"] },
      { title: "10.7 Checkpoint Review", path: "pages/module_5/10.7_Lesson_Review.html" },
    ]
  },
  {
    label: "Module 6",
    items: [
      { title: "11.1.1 Standard Operating Procedure", path: "pages/module_6/11.1.1_Standard_Operation_Procedure.html" },
      { title: "11.1.2 Service Level Agreements", path: "pages/module_6/11.1.2_Service_Level_Agreements.html" },
      { title: "11.1.3 Incident and Ticketing Systems", path: "pages/module_6/11.1.3_Incident_and_Ticketing_Systems.html" },
      { title: "11.1.4 Categories and Severity", path: "pages/module_6/11.1.4_Categories_and_Severity.html" },
      { title: "11.1.5 Ticket Management", path: "pages/module_6/11.1.5_Ticket_Management.html" },
      { title: "11.1.7 Support Documentation and Knowledge Base Articles", path: "pages/module_6/11.1.7_Support_Documentation_and_Knowledge_Base_Articles.html" },
      { title: "11.1.8 Lessons Learned", path: "pages/module_6/11.1.8_Lessons_Learned.html" },
      { title: "11.1.9 Clear Written Communication", path: "pages/module_6/11.1.9_Clear_Written_Communication.html" },
      { title: "11.1.10 Knowledge Base", path: "pages/module_6/11.1.10_Knowledge_Base.html" },
      { title: "11.1.11 Knowledge Base Articles", path: "pages/module_6/11.1.11_Knowledge_Base_Articles.html" },
      { title: "11.1.12 Policy Documentation", path: "pages/module_6/11.1.12_Policy_Documentation.html" },
      { title: "11.1.13 Lab: Create a Ticket", path: "pages/module_6/11.1.13_Lab_Create_A_Ticket.html" },
      { title: "11.1.14 Lab: Close a Ticket", path: "pages/module_6/11.1.14_Lab_Close_A_Ticket.html" },
      { title: "11.1.15 Lab: Use Help Desk System", path: "pages/module_6/11.1.15_Lab_Use_Help_Desk_System.html" },
      { title: "11.1.16 Lesson Review", path: "pages/module_6/11.1.16_Lesson_Review.html" },
      { title: "11.2.1 Professional Support Processes", path: "pages/module_6/11.2.1_Professional_Support_Processes.html" },
      { title: "11.2.2 Professional Support Delivery", path: "pages/module_6/11.2.2_Professional_Support_Delivery.html" },
      { title: "11.2.3 Professional Appearance", path: "pages/module_6/11.2.3_Professional_Appearance.html" },
      { title: "11.2.4 Professional Communications", path: "pages/module_6/11.2.4_Professional_Communications.html" },
      { title: "11.2.5 Clarifying and Questioning Techniques", path: "pages/module_6/11.2.5_Clarifying_and_Questioning_Techniques.html" },
      { title: "11.2.6 Difficult Situations", path: "pages/module_6/11.2.6_Difficult_Situations.html" },
      { title: "11.2.7 Dealing with Difficult Customers", path: "pages/module_6/11.2.7_Dealing_With_Difficult_Customers.html" },
      { title: "11.2.8 Do Not Post Experiences on Social Media", path: "pages/module_6/11.2.8_Do_Not_Post_Experiences_On_Social_Media.html" },
      { title: "11.2.9 Lesson Review", path: "pages/module_6/11.2.9_Lesson_Review.html" },
      { title: "11.3.1 Windows and macOS", path: "pages/module_6/11.3.1_Windows_and_macOS.html" },
      { title: "11.3.2 UNIX, Linux, and Chrome OS", path: "pages/module_6/11.3.2_UNIX_Linux_ChromeOS.html" },
      { title: "11.3.3 iOS and Android", path: "pages/module_6/11.3.3_iOS_and_Android.html" },
      { title: "11.3.4 Windows File System Types", path: "pages/module_6/11.3.4_Windows_File_System_Types.html" },
      { title: "11.3.5 Linux and macOS File System Types", path: "pages/module_6/11.3.5_Linux_and_macOS_File_System_Types.html" },
      { title: "11.3.6 OS Compatibility Issues", path: "pages/module_6/11.3.6_OS_Compatibility.html" },
      { title: "11.3.7 Vendor Life-cycle Limitations", path: "pages/module_6/11.3.7_Vendor_Life-Cycle_Limitations.html" },
      { title: "11.3.8 Lesson Review", path: "pages/module_6/11.3.8_Lesson_Review.html" },
      { title: "11.4.1 Operating System Types", path: "pages/module_6/11.4.1_Operating_System_Types.html" },
      { title: "11.4.2 Documentation Policies and Procedures", path: "pages/module_6/11.4.2_Documentation_Policies_and_Procedures.html" },
      { title: "11.4.3 Exercise: Incident Lifecycle Mapping", path: "pages/module_6/11.4.3_Exercise_Incident_Lifecylce_Mapping.html" },
      { title: "11.4.4 Exercise: Elevator Pitch Practice", path: "pages/module_6/11.4.4_Exercise_Elevator_Pitch_Practice.html" },
      { title: "11.4.5 Exercise: Operating System History Timeline", path: "pages/module_6/11.4.5_Exercise_Operating_System_History_Timeline.html" },
      { title: "11.4.6 Exercise: Incident Response Plan Capstone", path: "pages/module_6/11.4.6_Exercise_Incident_Response_Plan_Capstone.html" },
      { title: "11.5 Module Quiz", path: "pages/module_6/11.5_Module_Quiz.html", classes: ["nav-quiz"] },
      { title: "12.1.1 Windows Interfaces", path: "pages/module_6/12.1.1_Windows_Interfaces.html" },
      { title: "12.1.2 Windows Settings and Control Panel", path: "pages/module_6/12.1.2_Windows_Settings_and_Control_Panel.html" },
      { title: "12.1.3 Lab: Explore Windows Settings", path: "pages/module_6/12.1.3_Lab_Explore_Windows_Settings.html" },
      { title: "12.1.4 Accounts Settings", path: "pages/module_6/12.1.4_Account_Settings.html" },
      { title: "12.1.5 Using the Windows Desktop Interface", path: "pages/module_6/12.1.5_Using_the_Windows_Desktop_Interface.html" },
      { title: "12.1.6 Privacy Settings", path: "pages/module_6/12.1.6_Privacy_Settings.html" },
      { title: "12.1.7 Desktop Settings", path: "pages/module_6/12.1.7_Desktop_Settings.html" },
      { title: "12.1.8 Lab: Require a Screen Saver Password", path: "pages/module_6/12.1.8_Lab.html" },
      { title: "12.1.9 Ease of Access Settings", path: "pages/module_6/12.1.9_Ease_Of_Access_Settings.html" },
      { title: "12.1.10 File Explorer", path: "pages/module_6/12.1.10_File_Explorer.html" },
      { title: "12.1.12 Indexing Options", path: "pages/module_6/12.1.12_Indexing_Options.html" },
      { title: "12.1.13 Lesson Review", path: "pages/module_6/12.1.13_Lesson_Review.html" },
      { title: "12.2.1 System Settings", path: "pages/module_6/12.2.1_System_Settings.html" },
      { title: "12.2.2 Update and Security Settings", path: "pages/module_6/12.2.2_Update_and_Security_Settings.html" },
      { title: "12.2.3 Configure Windows Update", path: "pages/module_6/12.2.3_Configure_Windows_Update.html" },
      { title: "12.2.4 Device Settings", path: "pages/module_6/12.2.4_Device_Settings.html" },
      { title: "12.2.5 Display and Sound Settings", path: "pages/module_6/12.2.5_Display_and_Sound_Settings.html" },
      { title: "12.2.6 Power Options", path: "pages/module_6/12.2.6_Power_Options.html" },
      { title: "12.2.7 Lab: Edit Power Options", path: "pages/module_6/12.2.7_Lab_Edit_Power_Options.html" },
      { title: "12.2.8 Apps, Programs, and Features", path: "pages/module_6/12.2.8_Apps_Programs_Features.html" },
      { title: "12.2.9 Apps Settings", path: "pages/module_6/12.2.9_App_Settings.html" },
      { title: "12.2.10 Network Settings", path: "pages/module_6/12.2.10_Network_Settings.html" },
      { title: "12.2.11 Administrative Tools", path: "pages/module_6/12.2.11_Administrative_Tools.html" },
      { title: "12.2.12 Management Shortcuts", path: "pages/module_6/12.2.12_Management_Shortcuts.html" },
      { title: "12.2.13 Lesson Review", path: "pages/module_6/12.2.13_Lesson_Review.html" },
      { title: "12.3.1 System Requirements for Applications", path: "pages/module_6/12.3.1_System_Requirements_for_Applications.html" },
      { title: "12.3.2 OS Requirements for Applications", path: "pages/module_6/12.3.2_Requirements_For_Applications.html" },
      { title: "12.3.3 Distribution Methods", path: "pages/module_6/12.3.3_Distribution_Methods.html" },
      { title: "12.3.4 Other Considerations", path: "pages/module_6/12.3.4_Other_Considerations.html" },
      { title: "12.3.5 Lesson Review", path: "pages/module_6/12.3.5_Lesson_Review.html" },
      { title: "12.4.1 Email Systems", path: "pages/module_6/12.4.1_Email_Systems.html" },
      { title: "12.4.2 Storage", path: "pages/module_6/12.4.2_Storage.html" },
      { title: "12.4.3 Collaboration Tools", path: "pages/module_6/12.4.3_Collboration_Tools.html" },
      { title: "12.4.4 User Licensing", path: "pages/module_6/12.4.4_User_Licensing.html" },
      { title: "12.4.7 Lesson Review", path: "pages/module_6/12.4.7_Lesson_Review.html" },
      { title: "12.5.1 Windows Utilities", path: "pages/module_6/12.5.1_Windows_Utlities.html" },
      { title: "12.5.2 Windows Network Settings", path: "pages/module_6/12.5.2_Windows_Network_Settings.html" },
      { title: "12.5.3 Exercise: Exploring Windows Utilities", path: "pages/module_6/12.5.3_Exercise.html" },
      { title: "12.5.4 Exercise: System Settings Hands-On Practice", path: "pages/module_6/12.5.4_Exercise.html" },
      { title: "12.5.5 Exercise: Hands-On Installation Practice", path: "pages/module_6/12.5.5_Exercise.html" },
      { title: "12.5.6 Exercise: Cloud-Based Applications", path: "pages/module_6/12.5.6_Exercise.html" },
      { title: "12.5.7 Exercise: Cloud Comparison Activity Capstone", path: "pages/module_6/12.5.7_Exercise.html" },
      { title: "12.6 Module Quiz", path: "pages/module_6/12.6_Module_Quiz.html" },
    ]
  },
  {
    label: "Module 7",
    items: [
      { title: "13.1.1 Device Manager", path: "pages/module_7/13.1.1_Device_Manager.html" },
      { title: "13.1.2 Disk Management Console", path: "pages/module_7/13.1.2_Disk_Management_Console.html" },
      { title: "13.1.3 Disk Maintenance Tools", path: "pages/module_7/13.1.3_Disk_Management_Tools.html" },
      { title: "13.1.4 Lab: Disk Management", path: "pages/module_7/13.1.4_Lab_Disk_Management.html" },
      { title: "13.1.5 Task Scheduler", path: "pages/module_7/13.1.5_Task_Scheduler.html" },
      { title: "13.1.6 Local Users and Groups Console", path: "pages/module_7/13.1.6_Local_Users_and_Groups_Console.html" },
      { title: "13.1.7 Lab: Users and Groups", path: "pages/module_7/13.1.7_Lab_Users_and_Groups.html" },
      { title: "13.1.8 Certificate Manager", path: "pages/module_7/13.1.8_Certificate_Manager.html" },
      { title: "13.1.9 Group Policy Editor", path: "pages/module_7/13.1.9_Group_Policy_Editor.html" },
      { title: "13.1.10 Registry Editor", path: "pages/module_7/13.1.10_Registry_Editor.html" },
      { title: "13.1.11 Custom Microsoft Management Consoles", path: "pages/module_7/13.1.11_Custom_Microsoft_Management_Consoles.html" },
      { title: "13.1.12 Lesson Review", path: "pages/module_7/13.1.12_Lesson_Review.html" },
      { title: "13.2.1 Command Prompt", path: "pages/module_7/13.2.1_Command_Prompt.html" },
      { title: "13.2.2 Navigation Commands", path: "pages/module_7/13.2.2_Navigation_Commands.html" },
      { title: "13.2.3 File Management Commands", path: "pages/module_7/13.2.3_File_Management_Commands.html" },
      { title: "13.2.5 Disk Management Commands", path: "pages/module_7/13.2.5_Disk_Management_Commands.html" },
    ]
  }
];

const VISITED_STORAGE_KEY = "fignberry.visited-pages";
const OPEN_STORAGE_KEY = "fignberry.nav-open-sections";
const MOBILE_BREAKPOINT = 768;

function normalizePathname(pathname) {
  let normalized = pathname.replace(/\\/g, "/");

  if (!/\.html?$/i.test(normalized)) {
    normalized = normalized.endsWith("/") ? `${normalized}index.html` : `${normalized}/index.html`;
  }

  return normalized.replace(/\/+/g, "/");
}

function getScriptRootUrl() {
  const navScript = document.querySelector('script[src$="js/nav.js"]');
  const scriptUrl = navScript
    ? new URL(navScript.src, window.location.href)
    : new URL("js/nav.js", window.location.href);
  return new URL("../", scriptUrl);
}

function pathSegments(pathname) {
  return pathname.split("/").filter(Boolean);
}

function toRelativeHref(fromDirectoryPath, targetPath) {
  const fromSegments = pathSegments(fromDirectoryPath);
  const targetSegments = pathSegments(targetPath);
  let sharedIndex = 0;

  while (
    sharedIndex < fromSegments.length &&
    sharedIndex < targetSegments.length &&
    fromSegments[sharedIndex] === targetSegments[sharedIndex]
  ) {
    sharedIndex += 1;
  }

  const upwardSteps = fromSegments.length - sharedIndex;
  const parts = [];

  for (let index = 0; index < upwardSteps; index += 1) {
    parts.push("..");
  }

  parts.push(...targetSegments.slice(sharedIndex));

  return parts.join("/") || ".";
}

function getAllItems(section) {
  if (section.items) {
    return section.items;
  }

  return section.groups.flatMap((group) => group.items);
}

function getFlatNavItems() {
  return NAV_DATA.flatMap((section) => getAllItems(section));
}

function readVisitedPages() {
  try {
    const rawValue = window.localStorage.getItem(VISITED_STORAGE_KEY);
    const parsedValue = rawValue ? JSON.parse(rawValue) : [];
    return new Set(Array.isArray(parsedValue) ? parsedValue : []);
  } catch (error) {
    return new Set();
  }
}

function writeVisitedPages(visitedPages) {
  try {
    window.localStorage.setItem(VISITED_STORAGE_KEY, JSON.stringify([...visitedPages]));
  } catch (error) {
    // Ignore storage failures and leave the UI functional.
  }
}

function readOpenSections() {
  try {
    const rawValue = window.localStorage.getItem(OPEN_STORAGE_KEY);
    const parsedValue = rawValue ? JSON.parse(rawValue) : {};
    return parsedValue && typeof parsedValue === "object" ? parsedValue : {};
  } catch (error) {
    return {};
  }
}

function writeOpenSections(openSections) {
  try {
    window.localStorage.setItem(OPEN_STORAGE_KEY, JSON.stringify(openSections));
  } catch (error) {
    // Ignore storage failures and leave the UI functional.
  }
}

function createLink(item, context) {
  const link = document.createElement("a");
  const targetUrl = new URL(item.path, context.siteRootUrl);
  const resolvedPathname = normalizePathname(targetUrl.pathname);
  const href = toRelativeHref(context.currentDirectoryPath, resolvedPathname);
  const isCurrentPage = resolvedPathname === context.currentPathname;
  const classes = ["nav-link", ...(item.classes || [])];
  const statusClasses = ["nav-status-dot"];

  link.href = href;
  link.className = classes.join(" ");
  link.textContent = item.title;
  link.dataset.path = resolvedPathname;

  if (isCurrentPage) {
    link.classList.add("is-active");
    link.setAttribute("aria-current", "page");
    statusClasses.push("is-current");
  } else if (context.visitedPages.has(resolvedPathname)) {
    statusClasses.push("is-visited");
  } else {
    statusClasses.push("is-default");
  }

  const dot = document.createElement("span");
  dot.className = statusClasses.join(" ");
  dot.setAttribute("aria-hidden", "true");

  const label = document.createElement("span");
  label.className = "nav-link__label";
  label.textContent = item.title;

  link.textContent = "";
  link.append(dot, label);
  link.addEventListener("click", () => {
    context.visitedPages.add(resolvedPathname);
    writeVisitedPages(context.visitedPages);
  });

  return link;
}

function createItemGroup(group, context) {
  const wrapper = document.createElement("div");
  wrapper.className = "nav-group";

  const label = document.createElement("p");
  label.className = "nav-group-label";
  label.textContent = group.label;

  const links = document.createElement("div");
  links.className = "nav-links";

  group.items.forEach((item) => {
    links.append(createLink(item, context));
  });

  wrapper.append(label, links);
  return wrapper;
}

function createAccordionSection(section, index, context) {
  const module = document.createElement("section");
  const button = document.createElement("button");
  const panel = document.createElement("div");
  const sectionId = `nav-section-${index + 1}`;
  const sectionItems = getAllItems(section);
  const containsCurrentPage = sectionItems.some((item) => {
    const itemUrl = new URL(item.path, context.siteRootUrl);
    return normalizePathname(itemUrl.pathname) === context.currentPathname;
  });
  const savedOpenSections = context.openSections;
  const isOpen = Object.prototype.hasOwnProperty.call(savedOpenSections, section.label)
    ? Boolean(savedOpenSections[section.label])
    : containsCurrentPage || index === 0;

  module.className = "nav-section";

  button.type = "button";
  button.className = "nav-section-trigger";
  button.setAttribute("aria-expanded", String(isOpen));
  button.setAttribute("aria-controls", sectionId);

  const chevron = document.createElement("span");
  chevron.className = "nav-chevron";
  chevron.setAttribute("aria-hidden", "true");

  const label = document.createElement("span");
  label.className = "nav-label";
  label.textContent = section.label;

  button.append(chevron, label);

  panel.id = sectionId;
  panel.className = "nav-section-panel";
  panel.hidden = !isOpen;

  if (section.groups) {
    section.groups.forEach((group) => {
      panel.append(createItemGroup(group, context));
    });
  } else if (section.items) {
    const links = document.createElement("div");
    links.className = "nav-links";

    section.items.forEach((item) => {
      links.append(createLink(item, context));
    });

    panel.append(links);
  }

  button.addEventListener("click", () => {
    const nextOpenState = button.getAttribute("aria-expanded") !== "true";
    button.setAttribute("aria-expanded", String(nextOpenState));
    panel.hidden = !nextOpenState;
    context.openSections[section.label] = nextOpenState;
    writeOpenSections(context.openSections);
  });

  module.append(button, panel);
  return module;
}

function createMobilePageBar(context, currentItem) {
  const bar = document.createElement("div");
  bar.className = "mobile-page-bar";
  const isHomePage = currentItem && currentItem.path === "index.html";

  const title = document.createElement("p");
  title.className = "mobile-page-bar__title";
  title.textContent = currentItem ? currentItem.title : "Course Navigation";

  bar.append(title);

  if (!isHomePage) {
    const homeLink = document.createElement("a");
    homeLink.className = "mobile-page-bar__home";
    homeLink.href = toRelativeHref(context.currentDirectoryPath, normalizePathname(new URL("index.html", context.siteRootUrl).pathname));
    homeLink.textContent = "Home";
    bar.append(homeLink);
  } else {
    bar.classList.add("mobile-page-bar--title-only");
  }

  return bar;
}

function appendPageSequenceNav(mainElement, context, currentItem) {
  const flatItems = getFlatNavItems();
  const currentIndex = flatItems.findIndex((item) => item.path === currentItem.path);

  if (currentIndex === -1) {
    return;
  }

  const previousItem = flatItems[currentIndex - 1] || null;
  const nextItem = flatItems[currentIndex + 1] || null;

  if (!previousItem && !nextItem) {
    return;
  }

  const nav = document.createElement("nav");
  nav.className = "page-sequence-nav";
  nav.setAttribute("aria-label", "Lesson navigation");

  if (previousItem) {
    const previousLink = document.createElement("a");
    previousLink.className = "page-sequence-link";
    previousLink.href = toRelativeHref(
      context.currentDirectoryPath,
      normalizePathname(new URL(previousItem.path, context.siteRootUrl).pathname)
    );
    previousLink.innerHTML = `<span class="page-sequence-link__eyebrow">Previous</span><span class="page-sequence-link__title">${previousItem.title}</span>`;
    nav.append(previousLink);
  }

  if (nextItem) {
    const nextLink = document.createElement("a");
    nextLink.className = "page-sequence-link page-sequence-link--next";
    nextLink.href = toRelativeHref(
      context.currentDirectoryPath,
      normalizePathname(new URL(nextItem.path, context.siteRootUrl).pathname)
    );
    nextLink.innerHTML = `<span class="page-sequence-link__eyebrow">Next</span><span class="page-sequence-link__title">${nextItem.title}</span>`;
    nav.append(nextLink);
  }

  mainElement.append(nav);
}

function wrapTablesForMobile(mainElement) {
  const tables = mainElement.querySelectorAll("table");

  tables.forEach((table) => {
    if (table.parentElement && table.parentElement.classList.contains("table-scroll")) {
      return;
    }

    const wrapper = document.createElement("div");
    wrapper.className = "table-scroll";
    table.parentNode.insertBefore(wrapper, table);
    wrapper.append(table);
  });
}

function appendSiteFooter(mainElement) {
  if (!mainElement || mainElement.querySelector(".site-footer")) {
    return;
  }

  const footer = document.createElement("footer");
  footer.className = "site-footer";

  const footerText = document.createElement("p");
  footerText.className = "site-footer__text";
  footerText.textContent = "Questions?";

  const footerLink = document.createElement("a");
  footerLink.className = "site-footer__link";
  footerLink.href = "mailto:hello@fignberry.club";
  footerLink.textContent = "Contact me";

  footer.append(footerText, footerLink);
  mainElement.append(footer);
}

function closeSidebar() {
  document.body.classList.remove("is-sidebar-open");
  const toggle = document.querySelector("[data-sidebar-toggle]");
  const backdrop = document.querySelector("[data-sidebar-backdrop]");

  if (toggle) {
    toggle.setAttribute("aria-expanded", "false");
  }

  if (backdrop) {
    backdrop.hidden = true;
  }
}

function openSidebar() {
  document.body.classList.add("is-sidebar-open");
  const toggle = document.querySelector("[data-sidebar-toggle]");
  const backdrop = document.querySelector("[data-sidebar-backdrop]");

  if (toggle) {
    toggle.setAttribute("aria-expanded", "true");
  }

  if (backdrop) {
    backdrop.hidden = false;
  }
}

function setupSidebarToggle(navElement) {
  const toggle = document.querySelector("[data-sidebar-toggle]");
  const backdrop = document.querySelector("[data-sidebar-backdrop]");

  if (!toggle || !backdrop) {
    return;
  }

  toggle.addEventListener("click", () => {
    if (document.body.classList.contains("is-sidebar-open")) {
      closeSidebar();
      return;
    }

    openSidebar();
  });

  backdrop.addEventListener("click", closeSidebar);

  navElement.addEventListener("click", (event) => {
    const link = event.target.closest("a.nav-link");

    if (link && window.innerWidth < MOBILE_BREAKPOINT) {
      closeSidebar();
    }
  });

  window.addEventListener("resize", () => {
    if (window.innerWidth >= MOBILE_BREAKPOINT) {
      closeSidebar();
    }
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      closeSidebar();
    }
  });
}

document.addEventListener("DOMContentLoaded", () => {
  try {
    window.localStorage.setItem("lastPage", window.location.href);
  } catch (error) {
    // Ignore storage failures and leave the UI functional.
  }

  const navElement = document.querySelector(".site-nav");

  if (!navElement) {
    return;
  }

  const currentUrl = new URL(window.location.href);
  const siteRootUrl = getScriptRootUrl();
  const currentPathname = normalizePathname(currentUrl.pathname);
  const currentDirectoryPath = normalizePathname(new URL("./", currentUrl).pathname).replace(/index\.html$/i, "");
  const visitedPages = readVisitedPages();
  const openSections = readOpenSections();
  const currentItem = getFlatNavItems().find((item) => {
    const itemUrl = new URL(item.path, siteRootUrl);
    return normalizePathname(itemUrl.pathname) === currentPathname;
  }) || null;
  const context = {
    currentPathname,
    currentDirectoryPath,
    currentItem,
    openSections,
    siteRootUrl,
    visitedPages
  };

  visitedPages.add(currentPathname);
  writeVisitedPages(visitedPages);
  navElement.textContent = "";

  NAV_DATA.forEach((section, index) => {
    navElement.append(createAccordionSection(section, index, context));
  });

  const pageContent = document.querySelector(".page-content");
  const siteShell = document.querySelector(".site-shell--sidebar");

  if (pageContent) {
    wrapTablesForMobile(pageContent);

    if (currentItem) {
      appendPageSequenceNav(pageContent, context, currentItem);
    }

    appendSiteFooter(pageContent);
  }

  if (siteShell) {
    siteShell.insertBefore(createMobilePageBar(context, currentItem), pageContent || null);
  }

  setupSidebarToggle(navElement);
});
