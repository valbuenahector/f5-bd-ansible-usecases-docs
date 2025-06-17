F5 and Ansible 101 - Basic Course
=================================

`Last updated: 2023-12-7 6:00 AM MT`

Welcome to the F5 and Ansible 101 Basic Course! This lab is designed to help you get started with Ansible and F5 integrations. By the end of this course, you will have a solid understanding of the following:

- Setting up/configuring Playbooks
- Running playbooks with Ansible Automation Platform 2.x using Ansible Navigator and Execution Engines.
- Running playbooks with Ansible Automation Platform 2.x Controller (Formerly known as Tower)

Lab & Tasks:
------------

The next page (Introduction) will cover the lab environment, access, and lab variables. The lab will be using UDF where we have deployed the following resources:

- F5 BIG-IP 17.1.x used for Automation.
- 2x Web Server Nodes as server endpoints for BIG-IP to test/validate traffic.
- RHEL Box with Ansible Automation Platform installed for running automation use cases.
- External Client for testing connectivity and validating connections.

During the lab exercises, we will explore different methods of deploying applications included in the lab.

Section 1: Introduction to Ansible and F5 Integration
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

In this section, we will cover the fundamental concepts of Ansible and its integration with F5. You will learn...

.. toctree::
   :glob:
   :maxdepth: 2

   1.0/*

Section 2: Advanced Ansible Playbooks for F5
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Delve deeper into Ansible playbooks and their advanced features for F5 automation.

.. toctree::
   :glob:
   :maxdepth: 2

   2.0/*


Section 3: Introduction to Ansible and AS3
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Learn how to use Ansible with F5's AS3 Declarative automation toolchain

.. toctree::
   :glob:
   :maxdepth: 2

   3.0/*


Section 4: Ansible Automation Platform Controller
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Learn how to use Ansible Automation Platform Controller (formerly known as Tower) for centralized automation.

.. toctree::
   :glob:
   :maxdepth: 2

   4.0/*
