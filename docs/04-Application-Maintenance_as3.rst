Use Case 04: Application Maintenance
====================================

OVERVIEW
--------

Application-Maintenance.yaml is a templated Ansible Playbook that demonstrates
the ability to change the state (enable/disable/offline) of traffic flowing to
web-server(s) in a load balancing pool.

There are times where web servers are taken offline to provide upgrades,
troubleshooting, or even replacement. 

This playbook allows the ability to enable, disable or offline a specific or
array of pool members (e.g. [hostname]:[port] or [ip address]:[port]); This
script can also affect "All" of the members of a selected pool.

RUNNING THE TEMPLATE
--------------------

Running this template assumes that a F5 BIG-IP instance, necessary webservers
and Ansible node are available. To deploy a sandbox infrastructure in AWS users
can use the `Ansible Workshops <https://github.com/ansible/workshops>`__

1. Login to the Ansible host

2. Change Directory in the Ansible Host to the use-cases repo previously
   downloaded

   .. code:: bash
   
      cd ~/f5-bd-ansible-usecases/AS3/04-Application-Maintenance

3. Run the Ansible Playbook ‘Application-Maintenance.yaml’

   .. code:: bash

      ansible-playbook Application-Maintenance.yaml

4. Verify the F5 Configuration

BIG-IP - (https://F5-BIG-IP-Public-IP:8443) - get the F5-BIG-IP-Public-IP from
instructor_inventory file in provisioning host.
- Login to the BIG-IP
- Navigate to Local Traffic --> Pools
- Click on the pool you selected while running the playbook
- View the members of the pool and verify their state based on action choosen while running the playbook

.. note::

   Username is Admin and the Password would be part of the Linklight Lab password or in the f5_vars.yml file used to provision the lab.

5. Verify the Website Availability

From a client brower, access the application through the virtual address on the F5 BIG-IP.
- From a client brower, access the application through the virtual address on the F5 BIG-IP.
- To access this site externally you will need to use the instructor inventory studentX-f5 IP Address which will be refered as (F5-BIG-IP-Public-IP) below.
- From a client browser, access the VIP on port 8081 to view the new self-signed certificate (https://F5-BIG-IP-Public-IP:8083)

.. note::

   Your browser is presented with a certificate (clientssl cert) that is built with the BIG-IP. You will therefore see an ‘unsafe’ message from your browser which is expected in this demo. Click proceed to website.


6. Before moving to the next usecase we need to remove the configuration as we are deploying these usecases as a separated Tenant.

   .. code::
   
      ansible-playbook delete.yml

.. hint::

   Username is admin and the Password would be part of the Linklight Lab
   password or in the f5_vars.yml file used to provision the lab.
