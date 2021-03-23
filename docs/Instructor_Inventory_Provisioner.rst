Accessing Instructor Inventory From the Provisioner
===================================================

OVERVIEW
--------

Finding the Instructor Inventory within the Ansible AWS Provisioner which can be utilized to connect 
to things like the F5 BIG-IP Public IP address, or the Web Nodes.  This section covers how to access
the instructor inventory within the Ansible Node used to Provision the Lab (From the Provisioner)


HOW TO ACCESS
-------------

1. Login to the Ansible  (studentX@ansible_node_ip) provided by the Accessing Instructor Inventory on Ansible Node
==============================================

OVERVIEW
--------

Finding the Instructor Inventory within the Ansible Node can be utilized to connect to 
things like the F5 BIG-IP Public IP address, or the Web Nodes.  This section covers how to access
the instructor inventory within the Ansible Node in the prebuilt (Provisioned Environment)


HOW TO ACCESS
-------------

1. Login to the Ansible Environment used to execute the AWS Provisioner code 
 
   The Workbench information is stored in a local directory, named after the
   workshop, after the provisioner is run.

   Example (where /git/workshops is where the provisioner code was cloned and run from)

   .. code:: bash
   
      cat /git/workshops/provisioner/<<workshop_name>>/instructor_inventory.txt

   Sample hosts file:

   .. code:: bash

      [all:vars]
      ansible_port=22

      [student1]
      student1-ansible ansible_host=34.219.251.xxx ansible_user=centos #Ansible host/control node
      student1-f5 ansible_host=52.39.228.xxx ansible_user=admin        #BIG-IP
      student1-host1 ansible_host=52.43.153.xxx ansible_user=centos    #Backend application server1
      student1-host2 ansible_host=34.215.176.xxx ansible_user=centos   #Backend application server2

